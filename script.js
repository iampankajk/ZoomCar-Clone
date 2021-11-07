// let btn = document.querySelector(".btn-primary");
    // btn.removeAttribute("disabled");
    function showSideBar() {
        let sidebar_component = document.querySelector(".sidebar-component");
        sidebar_component.style.display = "block";

        let sidebar = document.querySelector(".sidebar");
        sidebar.style.transform = "translate3d(0%, 0px, 0px)";

        let sidebar_ovl = document.querySelector(".sidebar-ovl");
        sidebar_ovl.style.opacity = "1";
        sidebar_ovl.style.pointerEvents = "auto";
        sidebar_ovl.addEventListener("click", hideSideBar);
    }

    function hideSideBar() {
        let sidebar_component = document.querySelector(".sidebar-component");
        sidebar_component.style.display = "none";

        let sidebar = document.querySelector(".sidebar");
        sidebar.style.transform = "translate3d(-102%, 0, 0)";

        let sidebar_ovl = document.querySelector(".sidebar-ovl");
        sidebar_ovl.style.opacity = "0";

        sidebar_ovl.removeEventListener("click", hideSideBar);
    }


    // function for choosing trip option
    function showPopup(){
        let show_trip = document.querySelector(".show-popup");
        show_trip.style.display = "block";
        let trip_option1 = document.querySelector(".trip-option-select.o-1");
        trip_option1.addEventListener("click",roundTrip);
        let trip_option2 = document.querySelector(".trip-option-select.o-2");
        trip_option2.addEventListener("click",oneWay);
    }
    
    function closePopup(){
        let show_trip = document.querySelector(".show-popup");
        show_trip.style.display = "none";
    }


    // selecting round-trip from options function
    function roundTrip(){
        let trip_option = document.getElementById("trips");
        trip_option.innerText = "Round Trip";
        let drop = document.querySelector(".wrap-two");
        drop.style.display = "none";
        closePopup();

    }
    // selecting one-way-trip from options function
    function oneWay(){
        let trip_option = document.getElementById("trips");
        trip_option.innerText = "One Way Trip";
        let drop = document.querySelector(".wrap-two");
        drop.style.display = "block";
        closePopup();

    }