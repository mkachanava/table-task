const tableElements = [

    {   
        id: 1,
        logo: "img/figma.png",
        logoName: "Figma",
        link: "https://www.figma.com/",
        cardType: "Visa",
        cardNumber: "***** 2468",
        nameClient: "Itai Bracha",
        email: "Itai Bracha31@gmail.com",
        lastDate: "Jan 2,2022",
        lastTranscation: "$783.22",
        status: "Done",
        endDate: "Jan 12,2022",
        totalUsed: "$783.22,", 
        buttonPoints: "..."
    },
    {   
        id: 2,
        logo: "img/adobe_xd.png",
        logoName: "Adobe XD",
        link: "https://www.adobe.com/",
        cardType: "Visa",
        cardNumber: "***** 2468",
        nameClient: "Itai Bracha",
        email: "Itai Bracha31@gmail.com",
        lastDate: "Jan 2,2022",
        lastTranscation: "$783.22",
        status: "Done",
        endDate: "Jan 12,2022",
        totalUsed: "$783.22,", 
        buttonPoints: "..."
    },
    {   
        id: 3,
        logo: "img/mailchimp.png",
        logoName: "Mailchimp",
        link: "https://mailchimp.com/",
        cardType: "Visa",
        cardNumber: "***** 2468",
        nameClient: "Itai Bracha",
        email: "Itai Bracha31@gmail.com",
        lastDate: "Jan 2,2022",
        lastTranscation: "$783.22",
        status: "Done",
        endDate: "Jan 12,2022",
        totalUsed: "$783.22,", 
        buttonPoints: "..."
    },
    {   
        id: 4,
        logo: "img/wix.png",
        logoName: "WIX",
        link: "https://www.wix.com/",
        cardType: "Visa",
        cardNumber: "***** 2468",
        nameClient: "Itai Bracha",
        email: "Itai Bracha31@gmail.com",
        lastDate: "Jan 2,2022",
        lastTranscation: "$783.22",
        status: "Pending",
        endDate: "Jan 12,2022",
        totalUsed: "$783.22,", 
        buttonPoints: "..."
    },
    {   
        id: 5,
        logo: "img/youtube.png",
        logoName: "Youtube",
        link: "https://www.youtube.com/",
        cardType: "Visa",
        cardNumber: "***** 2468",
        nameClient: "Itai Bracha",
        email: "Itai Bracha31@gmail.com",
        lastDate: "Jan 2,2022",
        lastTranscation: "$783.22",
        status: "Done",
        endDate: "Jan 12,2022",
        totalUsed: "$783.22," 
    },

]

const tableElem = document.querySelector('tbody');
tableElements.forEach(tableRow => {
    const tr = document.createElement("tr");
    tr.className = 'column-table';
    const elements = [1, 2, 3, 4, 5, 6, 7, 8];
    elements.forEach((el,index) => { 
        const tdElem = document.createElement("td");
        if (index===0) {
            const inputElem = document.createElement("input");
            tdElem.appendChild(inputElem);
            inputElem.setAttribute("type", "checkbox");
        } else if (index===1) {
            tdElem.setAttribute("rowspan", "2");
            const imageElement = document.createElement("img");
            tdElem.appendChild(imageElement);
            imageElement.setAttribute("src", tableRow.logo);
        }

        tr.appendChild(tdElem);
    })
    tableElem.appendChild(tr);

});







