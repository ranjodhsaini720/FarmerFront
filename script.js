  window.onscroll = function () { scroll() };
        function scroll() {
            if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
                document.getElementById("addclass").style.backgroundColor = "rgba(0, 0, 0, 0.71)"
                document.getElementById("addclass").style.position = "fixed"  
                document.getElementById("addclass").style.boxShadow = "0px 0px 16px rgba(0,0,0,0.16)"
            } else {
                document.getElementById("addclass").style.backgroundColor = "transparent"
                document.getElementById("addclass").style.position = "absolute"
                document.getElementById("addclass").style.boxShadow = "0px 0px 0px 0px #00000000"
            }
        }

        // second

        // function add() {
        //     const change = document.getElementById("addclass");
        //     change.classList.toggle('addnew');
        // }