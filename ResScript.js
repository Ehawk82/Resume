(function () {
    "use strict";
    /*global Elems,textElems,document,body,styleSheet,alert,window*/
    var runUI = {
            loadData: function () {
                var Elems, textElems;
                textElems = ["Jason Graziano",
                             "946 Highland Ave <br /> Buffalo NY, 14223 <br /> 716-563-8088 <br /> mrehawk822@gmail.com <br /><hr />",
                             "Profile",
                             "Age: 32 <br /> Gender: Male. <br /> Race: Human. <br /> Quote: \"All your redstone are belong to us!\". <br /> <br /> Hobbies: Gaming, Fixing things around the house, playing with Snap Circuits with my kids, playing with magnets. <br /><br /> Interests: Making redstone computers on the game \"Minecraft\", sociology and politics.",
                             "<br /> Background & Work History",
                             "Age:15-16 \"Stock-boy\" at The Corner Store on Oliver Street in North Tonawanda NY (reason for leaving, McDonalds paid better ). <br /> Age: 17-19 Maintenance manager at McDonalds on Meadow Drive in North Tonawanda (Reason for leaving, Joined Navy). <br /> Age:19-26 US Navy Seabees, NMCB74 contingency engineer(Reason for leaving, Injury in Kuwait during OIF/OEF ). <br /> Age 26-27: Unemployed. <br /> Age 28-30: College -Studied Social Science(no degree yet). <br /> Age 30-present: Self teaching JavaScript specifically to pursue a career in software engineering.",
                             "<br /> Notable Achievements",
                             "Won 1st place in Niagara Orleans BOCES VICA competition in 2000 for Drywall and Electric. <br /> Helped Construct a 49,000 cu yard concrete parking apron for the Navy in Kuwait, Earned Battle E ribbon. <br /> Earned Good Conduct Service medal and made the rank of Builder Third Class Petty Officer. <br /> Raising 4 kind-hearted children, one of my most proudest of accomplishments.",
                             "<br /> References",
                             "Walter Ritchart, personal friend.  716-715-9867 <br /> John Haugeland, Personal Friend, johnhaugeland@yahoo.com <br /> Robert Graziano, Father, 716-990-5251",
                             "<br /> Skills",
                             "Firm understanding of multiple engineering disciplines.  Concrete, Masonry, Carpentry, Plumbing, Electric. <br /> Basic understaning of HTML5, CSS, and JavaScript(JSON, Jquery, nodeJS )",
                             "<br /> Comments & Miscellaneous",
                             "I am looking to learn and never stop learning.  I believe I am a good team player and work well with others.  I am willing to relocate to anywhere that can help me develop in to an expert programmer.  Currently I am trying to master JavaScript.  I know and understand Jquery, however my personal intentions are to master JS first before using other scripts. I can use JSON to store objects to local storage properly.  I know how to dynamically add HTML through JS rather than storing the elements in the HTML DOM. I am aware that I have a lot to learn, and I am humble about it."
                            ];
                Elems = "<div id='headWrap'><h3 id='heading'></h3><span id='headInfo'></span></div>";
                Elems += "<div id='wrapper'><div id='div1'><h4 id='h4div1'></h4><div id='div1Info'></div></div>";
                Elems += "<div id='div2'><h4 id='h4div2'></h4><div id='div2Info'></div></div>";
                Elems += "<div id='div3'><h4 id='h4div3'></h4><div id='div3Info'></div></div>";
                Elems += "<div id='div4'><h4 id='h4div4'></h4><div id='div4Info'></div></div>";
                Elems += "<div id='div5'><h4 id='h4div5'></h4><div id='div5Info'></div></div>";
                Elems += "<div id='div6'><h4 id='h4div6'></h4><div id='div6Info'></div></div>";
                Elems += "<div id='footer'></div></div>";
                body.innerHTML = Elems;
                document.getElementById("heading").innerHTML = textElems[0];
                document.getElementById("headInfo").innerHTML = textElems[1];
                document.getElementById("h4div1").innerHTML = textElems[2];
                document.getElementById("div1Info").innerHTML = textElems[3];
                document.getElementById("h4div2").innerHTML = textElems[4];
                document.getElementById("div2Info").innerHTML = textElems[5];
                document.getElementById("h4div3").innerHTML = textElems[6];
                document.getElementById("div3Info").innerHTML = textElems[7];
                document.getElementById("h4div4").innerHTML = textElems[8];
                document.getElementById("div4Info").innerHTML = textElems[9];
                document.getElementById("h4div5").innerHTML = textElems[10];
                document.getElementById("div5Info").innerHTML = textElems[11];
                document.getElementById("h4div6").innerHTML = textElems[12];
                document.getElementById("div6Info").innerHTML = textElems[13];
            },
            loadStyle: function () {
                var header, styleSheet;
                header = document.getElementsByTagName('head')[0];
                styleSheet = document.createElement('link');
                styleSheet.rel = 'stylesheet';
                styleSheet.type = 'text/css';
                styleSheet.href = 'mainStyle.css';
                styleSheet.media = 'all';
                header.appendChild(styleSheet);
            }
        };
    window.onload = function () {
        runUI.loadData();
        runUI.loadStyle();
    };
}());
