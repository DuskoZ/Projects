
// === Variables ===

const elementsToObserve = document.querySelectorAll('section[id]'),
			visibleClass = 'visible',
      nav = document.querySelector('nav'),
      navPath = nav.querySelector('svg path'),
      navListItems = [...nav.querySelectorAll('li')],
      navItems = navListItems.map(listItem => {

          const anchor = listItem.querySelector('a'),
                targetID = anchor && anchor.getAttribute('href').slice(1),
                target = document.getElementById(targetID);

          return { listItem, anchor, target };

        })
        .filter(item => item.target);
