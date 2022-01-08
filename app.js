const main = document.querySelector('main > div');
const getStartedBtn = document.getElementById('init-command');
const initGraphElement = document.querySelector('.graph');

const devData = {};
const fetchData = async (id) => {
  try {
    const res = await fetch(`./resources${id}.json`, {
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
  const graphElements = document.querySelectorAll('.graph');

  e.target.parentElement.querySelectorAll('ul > li').forEach((option) => {
    if (option.id !== e.target.id) {
      option.classList.toggle('display');
    }
  });
  e.target.classList.toggle('active');
  if (e.target.classList.contains('active')) {
    generateNextOptions(
      e.target.id,
      graphElements[graphElements.length - 1].id
    );
    moveToBottom();
  } else {
    removeNextOptions();
  }
};

const generateNextOptions = (chosenOption, parent) => {
  createGraphElements(devData.content[parent][chosenOption]);
  triggerEvent();
};

const removeNextOptions = () => {
  const graphElements = document.querySelectorAll('.graph');
  graphElements[graphElements.length - 1].remove();
};

const triggerEvent = () => {
  const graphElements = document.querySelectorAll('.graph');
  const options =
    graphElements[graphElements.length - 1].querySelectorAll('ul > li');

  // alert! only clicking any of the first four hard-coded options (gamedev, webdev, etc) will trigger fetching the json
  if (graphElements.length <= 1) {
    options.forEach((option) => {
      option.addEventListener('click', async (e) => {
        await fetchData(e.target.id);
        toggleFurtherDisplay(e);
      });
    });
  } else {
    options.forEach((option) => {
      option.addEventListener('click', toggleFurtherDisplay);
    });
  }
};

triggerEvent();

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
    data.options.forEach((option) => {
      const optionElement = document.createElement('li');
      optionElement.id = option.id;
      if (option.link) {
        optionElement.innerHTML = `
              <a href=${option.link}>${option.title}</a>
              <div class="tooltip-content">
                <span>${option.more_info}</span>
              </div>
    `;
      } else {
        optionElement.innerHTML = `
        ${option.title}
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
