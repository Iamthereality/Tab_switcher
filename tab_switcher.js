document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    //switching between tabs
    function tab_switcher(tabsContainer, singleTab, tabContent, hideContent, showContent) {
        let tabs_container = document.querySelector(tabsContainer), //select element contained required tabs
            single_tab = document.querySelectorAll(singleTab), //select all the tabs with defined class name
            tab_content = document.querySelectorAll(tabContent); //select contents of all your tabs

        //cut the '.' symbol from the selected class name
        function prep_class(class_name) {
            return class_name.slice(1, class_name.length);
        }

        //show only selected tab content
        function hide_tab_content(start_position) {
            for (let i = start_position; i < tab_content.length; i++) {
                tab_content[i].classList.remove(prep_class(showContent));
                tab_content[i].classList.add(prep_class(hideContent));
            }
        }

        //hide content of all the tabs besides first
        hide_tab_content(1);

        //show selected tab
        function show_tab_content(tab_number) {
            if (tab_content[tab_number].classList.contains(prep_class(hideContent))) {
                tab_content[tab_number].classList.remove(prep_class(hideContent));
                tab_content[tab_number].classList.add(prep_class(showContent));
            }
        }

        //tab click event catching
        tabs_container.addEventListener('click', function (event) {
            let target = event.target;

            //check click event target
            //if clicked on a tab element
            if (target && target.classList.contains(prep_class(singleTab))) {
                for (let i = 0; i < single_tab.length; i++) {
                    if (target == single_tab[i]) {
                        hide_tab_content(0); //hide content of all the tabs
                        show_tab_content(i); //show content of the current selected tab
                        break;
                    }
                }
            }
        });
    }

    //call tab switcher function with its arguments
    tab_switcher(tabs_container_element, tab_element, tab_content, hide_content_class, show_content_class);
});