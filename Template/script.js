class UI {
    static navigationLinks = document.querySelectorAll('nav a')
    static sections = document.querySelectorAll('section');
    static main = document.querySelector('main')
    static rightArrow = document.querySelector('.arrow:has(.right)')
    static title = document.getElementById('title');
    static description = document.getElementById('description');
    static footer = document.querySelector('footer');
    static projects = document.getElementById('projects');
    static displayImg = document.querySelector('.display-img');
    static displayTitle = document.querySelector('.display-info .title');
    static displayContent = document.querySelector('.display-info .content');
    static displayImg = document.querySelector('.display-img');
    static siteButton = document.querySelector('.site-button')
}

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    let data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['HTML', 1],
        ['CSS',  1],
        ['JS', 1],
        ['PYTHON', 1],
        ['JAVA', 1],
        ['TYPESCRIPT', 1],
    ]);

    let options = {
        color: 'white',
        pieSliceText: 'label',
        pieStartAngle: 0,
        backgroundColor: '#080b10',
        pieHole: .4,
        legend: {
            textStyle: {color: 'white', fontSize: 38},
            alignment: 'center'
        },
        slices: {
            0: { color: '#913348' },
            1: { color: '#6f2e44' },
            2: { color: '#d97956' },
            3: { color: '#913348' },
            4: { color: '#6f2e44' },
            5: { color: '#d97956' },
            6: { color: '#913348' },
        },
    };

    let chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
}


function highlightNavigation() {
	let scrollPosition = UI.main.scrollTop;
	for (let i = 0; i < UI.sections.length; i++) {
		let currentSection = UI.sections[i];
		let sectionTop = currentSection.offsetTop;
		if (scrollPosition >= sectionTop - 10) { 
            UI.navigationLinks.forEach(link => link.classList.remove('active'))
            UI.navigationLinks[i].classList.add('active')
        }
    }
}

UI.main.addEventListener('scroll', () => highlightNavigation());
highlightNavigation()

UI.rightArrow.addEventListener('click', function scroll() {
    console.log(UI.projects.scrollLeft)
    UI.projects.scrollLeft += 800
})

class project {
    constructor (title, description, link, img) {
        this.title = title;
        this.description = description;
        this.link = link;
        this.img = img;
    }
}

const Projects = [
    new project (
        'Skate48',
        'Arizona Future Business Leaders of America, 2nd place winner for website design 2023.',
        'https://shane-bogue.github.io/Calc/',
        './Images/Skate48.PNG',
    ),
    new project (
        'Calendar',
        'A photo gallery template utilizing a simple grid, and creating an responsize interface to display a mastery of css selectors.',
        'https://shane-bogue.github.io/UV/',
        './Images/Skate48.PNG',
    ),
    new project (
        'Quiz',
        'A 10 question quiz (Kahoot.it Inspired!) over css principles utilizing intermediate javascript concepts.',
        'https://shane-bogue.github.io/Quiz/',
        './Images/Skate48.PNG',
    ),
    new project (
        'Game',
        'A javascript game made with the intent and to design for mobile first with a very simple game loop.',
        'https://shane-bogue.github.io/Space/',
        './Images/Skate48.PNG',
    ),
    new project (
        'Photo Gallery',
        'A photo gallery template utilizing a simple grid, and creating an responsize interface to display a mastery of css selectors.',
        'https://shane-bogue.github.io/UV/',
        './Images/Skate48.PNG',
    ),
    new project (
        'Calculator',
        'A calculator website made with javscript.',
        'https://shane-bogue.github.io/Calc/',
        './Images/Skate48.PNG',
    ),
    new project (
        'FlexBox',
        'Simple FlexBox Practice.',
        'https://shane-bogue.github.io/FlexBox/',
        './Images/Skate48.PNG',
    ),
    new project (
        'Arizona',
        'My first website.',
        'https://shane-bogue.github.io/Arizona/',
        './Images/Skate48.PNG',
    ),
    new project (
        'Jquery',
        'A template website made with the javascript library <i>Jquery</i>.',
        'https://shane-bogue.github.io/Jquery/',
        './Images/Skate48.PNG',
    ),
    new project (
        'CSS Grid',
        'A photo gallery template utilizing a simple grid, and creating an responsize interface to display a mastery of css selectors.',
        'https://shane-bogue.github.io/UV/',
        './Images/Skate48.PNG',
    ),
    new project (
        'Pizza Site',
        'A photo gallery template utilizing a simple grid, and creating an responsize interface to display a mastery of css selectors.',
        'https://shane-bogue.github.io/UV/',
        './Images/Skate48.PNG',
    ),
    new project (
        'CSS Transition',
        'A photo gallery template utilizing a simple grid, and creating an responsize interface to display a mastery of css selectors.',
        'https://shane-bogue.github.io/UV/',
        './Images/Skate48.PNG',
    ),
    new project (
        'SVG and Canvas',
        'A photo gallery template utilizing a simple grid, and creating an responsize interface to display a mastery of css selectors.',
        'https://shane-bogue.github.io/UV/',
        './Images/Skate48.PNG',
    ),
    new project (
        'ECommerce',
        'A photo gallery template utilizing a simple grid, and creating an responsize interface to display a mastery of css selectors.',
        'https://shane-bogue.github.io/UV/',
        './Images/Skate48.PNG',
    ),
    new project (
        'Form',
        'A fundraising form to display a mastery of html forms and regex.',
        'https://shane-bogue.github.io/Form/',
        './Images/Skate48.PNG',
    ),
    new project (
        'Todo Gallery',
        'A photo gallery template utilizing a simple grid, and creating an responsize interface to display a mastery of css selectors.',
        'https://shane-bogue.github.io/UV/',
        './Images/Skate48.PNG',
    ),
    new project (
        'SVG Filters',
        'A photo gallery template utilizing a simple grid, and creating an responsize interface to display a mastery of css selectors.',
        'https://shane-bogue.github.io/UV/',
        './Images/Skate48.PNG',
    ),
    new project (
        'CSS Filters',
        'A photo gallery template utilizing a simple grid, and creating an responsize interface to display a mastery of css selectors.',
        'https://shane-bogue.github.io/UV/',
        './Images/Skate48.PNG',
    ),
    new project (
        'Weather App',
        'A photo gallery template utilizing a simple grid, and creating an responsize interface to display a mastery of css selectors.',
        'https://shane-bogue.github.io/UV/',
        './Images/Skate48.PNG',
    )];

class projectHandler {

    static selectedCard = 0;

    static createCards() {
        UI.projects.textContent = ''
        Projects.forEach((project,id) => {
            const card = document.createElement('div')
            card.classList.add('project')
            card.id = id
            card.style.backgroundColor = id == projectHandler.selectedCard? '#e09c96': '#10121b'
            card.textContent = Projects[id].title
            UI.projects.append(card)
            UI.displayTitle.textContent = Projects[projectHandler.selectedCard].title
            UI.displayContent.textContent = Projects[projectHandler.selectedCard].description
            UI.displayImg.style.backgroundImage = `url(${Projects[projectHandler.selectedCard].img}`

            card.addEventListener('click', function click() {
                projectHandler.selectedCard = card.id
                projectHandler.createCards()
            })
        })
    }
}

UI.siteButton.addEventListener('click', () => window.open( `${Projects[projectHandler.selectedCard].link}`, '_blank'))

projectHandler.createCards()
