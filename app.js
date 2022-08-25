const main = document.querySelector('main > div');
const getStartedBtn = document.getElementById('init-command');
const initGraphElement = document.querySelector('.graph');
const initOptions = document.querySelectorAll('.graph ul > li');

const devData = {};
const fetchData = async (id) => {
  try {
    const res = await fetch(`./resources/${id}.json`, {
      method: 'get',
    });

    const data = await res.json();
    if (res.ok) {
      devData.content = data;
      return data;
    } else {
      alert('Error fetching data. Please try again');
    }
  } catch (err) {
    console.log(err);
    alert('Error fetching data. Please try again');
  }
};

const toggleFurtherDisplay = (e) => {
  e.target.parentElement.querySelectorAll('ul > li').forEach((option) => {
    // other options shouldn't disappear when in order
    if (option.id !== e.target.id) {
      option.classList.toggle('disable');
    }
  });
  e.target.classList.toggle('active');
  if (e.target.classList.contains('active')) {
    // contains the parent and chosen id
    createGraphElements(
      devData.content[e.target.parentElement.parentElement.parentElement.id][
        e.target.id
      ]
    );
    moveToBottom();
  } else {
    removeNextOptions();
  }
};

const removeNextOptions = () => {
  const graphElements = document.querySelectorAll('.graph');
  graphElements[graphElements.length - 1].remove();
};

const createGraphElements = (data) => {
  if (data) {
    const graphElement = document.createElement('div');
    graphElement.classList.add('graph');
    graphElement.id = data.next;
    // add order to list class name if showing an order
    data.order && graphElement.classList.add('order');

    // create paragraph description
    const graphDescription = document.createElement('p');
    graphDescription.classList.add('description');
    graphDescription.innerText = data.title;

    // create options
    const listElement = document.createElement('ul');
    data.options.forEach((option, index) => {
      const optionElement = document.createElement('li');
      optionElement.id = option.id;
      if (option.link) {
        optionElement.innerHTML = `
              <a href=${option.link} target="_blank">${
          data.order ? `${index + 1}👉` : ''
        } ${option.title}</a>
              <div class="tooltip-content">
                <span>${option.more_info}</span>
              </div>
    `;
      } else {
        optionElement.addEventListener('click', triggerListener);
        optionElement.innerHTML = `
        ${data.order ? `${index + 1}👉` : ''} ${option.title}  
        <div class="tooltip-content">
          <span>${option.more_info}</span>
        </div>
`;
      }
      listElement.appendChild(optionElement);
    });

    graphElement.appendChild(graphDescription);

    // for the puporse of order
    const divElement = document.createElement('div');
    divElement.classList.add('list-container');
    divElement.appendChild(listElement);
    graphElement.appendChild(divElement);
    main.appendChild(graphElement);
  } else {
    const div = document.createElement('div');
    div.classList.add('graph');
    div.innerHTML =
      '<p>There is no data of roadmap for this topic yet.</p><br /><p>Check back later</p>';
    main.appendChild(div);
  }
};

const moveToBottom = () => {
  document.querySelector('html').scrollTop =
    document.querySelector('main').scrollHeight;
};

getStartedBtn.addEventListener('click', (e) => {
  initGraphElement.style.display = 'block';
  e.target.style.display = 'none';
});

const triggerListener = (e) => {
  toggleFurtherDisplay(e);
};

initOptions.forEach((option) => {
  option.addEventListener('click', async (e) => {
    await fetchData(e.target.id);
    toggleFurtherDisplay(e);
  });
});
