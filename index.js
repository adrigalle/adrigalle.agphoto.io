var routes = {
    '':             'home.html',     
    '/':            'home.html',
    '#':            'home.html',
    '#/home':       'home.html',                        
    '#/about':      'about.html',
    '#/gallery':    'gallery.html',
    '#/faqs':       'faqs.html',
    '#/contact':    'contact.html',
    '#/services':   'services.html',
};

async function router(){
    console.log(location.hash);

    // get requested page
    var link = window.location.hash;

    // get path (route) for page
    var route = routes[link];

    // if route exists, load page
    if (route) loadPage(route);
};
router();

async function loadPage(url){
    // load page
    const res     = await fetch(url);
    const content = await res.text();
    const element = document.getElementById('content');
    element.innerHTML = content;
}

window.addEventListener('hashchange', router);