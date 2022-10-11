let slideFrames = document.getElementById("slideFrame");
let slideIndicator = document.getElementById("slideIndicator");
let content = document.getElementById("content")
let sort = document.getElementsByClassName("sort")
let cardHolder = document.getElementById("cardHolder")
let checkname = document.getElementById("checkName")
let checkmobile = document.getElementById("checkmobile")
let checkemail = document.getElementById("checkemail")
let checkaddress = document.getElementById("checkaddress")
let pageType = document.getElementById("pageType")
let pageCategory = document.getElementById("pageCategory")
let datalistOptions1 = document.getElementById("datalistOptions1")
let accBtn = document.getElementById("accBtn")
let checkUser = document.getElementById("checkUser")
checkUser = String(checkUser.innerHTML)
let modaldata = document.getElementById("modaldata")
let privacyContent = document.getElementById("privacyContent")
let contValidate = document.getElementById("contValidate")

privacy()

function privacy() {
    privacyContent.innerHTML = `<div class="modal-header">
    <h5 class="modal-title" id="staticBackdropLabel" style="text-align:center;text-decoration: underline; font-weight: bold;font-size: large;">
        Terms and Conditions
    </h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
    <h4 class="privacyHead">Privacy Policy</h4>
    <p class="privacyDetails"> DEVNEWS built the Dev News as a Free web. This SERVICE is provided by DEVNEWS at no cost and is intended for use as is. This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal
        Information if anyone decided to use my Service. If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing
        and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy. The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible
        at Dev News unless otherwise defined in this Privacy Policy.</p>
    <hr>
    <h4 class="privacyHead">Information Collection and Use</h4>
    <p class="privacyDetails">
        For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information, including but not limited to nothing. The information that I request will be retained on your device and is not collected
        by me in any way. The Website does use third party services that may collect information used to identify you.

        <br> I want to inform you that whenever you use my Service, in a case of an error in the Website I collect data and information (through third party products) on your phone called Log Data. the configuration of the Website when utilizing my Service, the time and date of your use of the Service, and other statistics.
    </p>
    <hr>
    <h4 class="privacyHead"> Cookies</h4>
    <p class="privacyDetails">
        Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory. This Service does not use these “cookies”
        explicitly. However, the Web may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being
        sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
    </p>
    <hr>
    <h4 class="privacyHead">Service Providers</h4>
    <p class="privacyDetails">
        I may employ third-party companies and individuals due to the following reasons: To facilitate our Service; To provide the Service on our behalf; To perform Service-related services; or To assist us in analyzing how our Service is used. I want to inform
        users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for
        any other purpose.
    </p>
    <hr>
    <h4 class="privacyHead"> Security</h4>
    <p class="privacyDetails">
        I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and
        reliable, and I cannot guarantee its absolute security.
    </p>
    <hr>
    <h4 class="privacyHead">Links to Other Sites</h4>
    <p class="privacyDetails">
        This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites.
        I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
    </p>
    <hr>
    <h4 class="privacyHead">Children’s Privacy</h4>
    <p class="privacyDetails">
        These Services do not address anyone under the age of 10. I do not knowingly collect personally identifiable information from children under 10 years of age. In the case I discover that a child under 10 has provided me with personal information, I immediately
        delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do necessary actions.</p>
    <hr>
    <h4 class="privacyHead">
        Changes to This Privacy Policy</h4>
    <p class="privacyDetails">
        I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page. This policy is effective as of 10-07-2022</p>
    <hr>
    <h4 class="privacyHead">
        Contact Us</h4>
    <p class="privacyDetails">
        If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me
        <a href="/contact">Here</a>
    </p>
    <hr>
</div>
<div class="modal-footer">
    <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
    <button type="button" data-bs-dismiss="modal" class="btn btn-primary">Understood</button>
</div>`;
}

if (checkUser == "False") {
    modaldata.innerHTML = ` <div class="modal-header">
    <h5 class="modal-title" id="staticBackdropLabel" style="text-align:center;text-decoration: underline; font-weight: bold;">Sign Up/Log In</h5>
</div>
<div class="modal-body">
    <div class="card" style="width: 100%;height: 100%;">
        <div class="card-body">
            <h5 class="card-title">You must be Logged In to continue.......</h5>
            <h6 class="card-subtitle mb-2 text-muted">Plz sign up or log in</h6>
            <p class="card-text"></p>
            <a href="/signup" rel="noopener noreferrer" class="card-link"><button type="button" class="btn btn-primary btn-lg" href="/signup">Sign Up</button></a>
            <a href="/login" rel="noopener noreferrer" class="card-link"><button type="button" class="btn btn-primary btn-lg"  href="/login ">Log In</button></a>
        </div>
    </div>

</div>  `;
    setInterval(() => {
        $('#staticBackdrop').modal('show');
    }, 30000);
} else {
    modaldata.innerHTML = `<div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel" style="text-align:center; font-weight: bold;">Account</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> 
                </div>
                <div class="modal-body">
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" class="img-fluid rounded-start" style="width:250px;height: 250px;" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h3 class="card-title" style="text-transform:capitalize;text-decoration: underline;text-align: center;">${String( checkname.innerHTML)}</h3>
                                    <hr>
                                    <p class="card-text">Mobile: ${String( checkmobile.innerHTML)}</p>
                                    <p class="card-text">E-Mail: ${String( checkemail.innerHTML)}</p>
                                    <p class="card-text">Address: ${String( checkaddress.innerHTML)}</p>
                                    <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                                    <hr>
                                    <a href="/logout" rel="noopener noreferrer">
                                        <div class="d-grid gap-2"><button type="button" class="btn btn-primary" href="/logout">Log Out</button></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
                    <!-- <a href="/logout" rel="noopener noreferrer"><button type="button" class="btn btn-primary" href="/logout">Log Out</button></a>

                    <a href="/signup" rel="noopener noreferrer"><button type="button" class="btn btn-primary" href="/signup">Sign Up</button></a>
                    <a href="/login" rel="noopener noreferrer"><button type="button" class="btn btn-primary"  href="/login ">Log In</button></a> -->
                </div>`;
    // console.log("bc 2")
}


//country
let country_url = " url_for('static',filename='ds/country.json') "
country_url = "static/ds/country.json"
async function country() {
    let fetching = await fetch(country_url)
    let data = await fetching.json()
    return data
}
let a = country()
let html = "";
a.then(data => {
    for (key in data) {
        html +=
            `<option value="${ data[key].name}">`
            // console.log(data[key].name)
    }
    datalistOptions1.innerHTML = html;
})

// states
let datalistOptions2 = document.getElementById("datalistOptions2")

let state_url = " url_for('static',filename='ds/state.json') "
state_url = "static/ds/state.json"
async function state() {
    let fetching = await fetch(state_url)
    let data = await fetching.json()
    return data;
}
let b = state()
let html2 = "";
b.then(data => {
    for (key in data) {
        html2 +=
            `<option value="${ data[key].name}">`
            // console.log(data[key].name)
    }
    datalistOptions2.innerHTML = html2;
})

// sports
let datalistOptions3 = document.getElementById("datalistOptions3")
let sports_url = " url_for('static',filename='ds/sports.json') "
sports_url = "static/ds/sports.json"
async function sports() {
    let fetching = await fetch(sports_url)
    let data = await fetching.json()
    return data;
}
let c = sports()
let html3 = "";
c.then(data => {
    for (key in data) {
        html3 +=
            `<option value="${ data[key].strSport}">`
            // console.log(data[key])
    }
    datalistOptions3.innerHTML = html3;
})

slideShow("india")

//slideshow
function slideShow(keyword) {
    let api = "626f974c13eb498784ad788881bb453b";
    // let api = "210c65e6d60d4c10804c39ff7265c891";
    // keyword = "world"
    rate = "rateLimited";
    category = "general";
    excludes = 'reuters.com';
    const d = new Date();
    let fromdate = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()%30}`;
    let todate = `${d.getFullYear()}-${d.getMonth()+1}-${Math.abs(d.getDate()-3)%30}`;
    // console.log(todate)
    let url = `https://newsapi.org/v2/top-headlines?language=en&category=${category}&q=${keyword}&from=${fromdate}&to=${todate}&excludeDomains=${excludes}
    &apiKey=${api}`;
    let html = "";
    let htmlsI = "";
    fetch(url).then((Response) => Response.json().then((data) => {
        for (keys in data) {
            for (elem in data[keys]) {
                if (elem > 1 && data[keys][elem].urlToImage != null && data[keys][elem].url != null && data[keys][elem].title != null && data[keys][elem].description != null) {
                    // console.log(data[keys][elem])
                    html += ` <div class="carousel-item" data-bs-interval="5000">
                    <img src="${data[keys][elem].urlToImage}" class="d-block w-100" style="height:90vh ;" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                    <a href="${data[keys][elem].url}" target="_blank" rel="noopener noreferrer" style="text-decoration:none;color:white"><h1>${data[keys][elem].title}</h1>
                        <p>${data[keys][elem].description}</p></a>
                    </div>
                  </div>`;
                    // console.log(elem - 1)
                    htmlsI += ` <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${elem-1}" aria-label="Slide ${elem}"></button>`
                }
            }
        }
        slideFrames.innerHTML += html;
        slideIndicator.innerHTML += htmlsI;
    }))
}
// keyword2 = "india"
// articles(keyword2)

function articles(keyword2) {
    let word = String(keyword2)
    let api = "626f974c13eb498784ad788881bb453b";
    // let api = "210c65e6d60d4c10804c39ff7265c891";
    rate = "rateLimited";
    const d = new Date();
    let fromdate = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()%30}`;
    let todate = `${d.getFullYear()}-${d.getMonth()+1}-${Math.abs(d.getDate()-5)%30}`;
    let url2 = `https://newsapi.org/v2/everything?language=en&from=${fromdate}&to=${todate}&excludeDomains='bbc.co.uk'&searchIn=title,description&sortBy=publishedAt&q=${word}&apiKey=${api}`;
    let html1 = "";
    let htmlsI = "";
    let html2 = '';
    fetch(url2).then((Response) => Response.json().then((data) => {
        // {{% set img='assets/img/'+post.img_url %}}
        console.log(data)
        for (key in data) {

            for (elem in data[key]) {
                console.log(elem)

                if (elem > 1) {

                    html1 += `<div class="card mb-3 mx-3 scaler" style="width: 98%; border-bottom: 1px solid grey;" >
                        <div class="row g-0">
                            <div class="col-md-3">
                                <img class="contentImg" src="${data[key][elem].urlToImage}"
                                onerror="this.onerror=null;this.src='https://www.pewresearch.org/wp-content/uploads/sites/8/2016/07/PJ_2016.07.07_Modern-News-Consumer_0-01.png';" width="100%" height="100%">
                            </div>
                            <div class="col-md-9">
                                <div class="card-body"><br>
                                    <h5 class="card-title">${data[key][elem].title}</h5><br>
                                    <p class="card-text">${data[key][elem].description}</p> 
                                    <div><a href="${data[key][elem].url}" target="blank">Read More Here</a></div><br><br><br>
                                    <p class="card-text"><small class="text-muted">Published At :  ${data[key][elem].source.name}  ( ${data[key][elem].publishedAt} )</small></p>
                                </div>
                            </div>
                        </div>
                    </div> `;
                    html2 = ""

                } else {
                    html2 = `<h5 style="text-align:center;">No Articles is there for your search. Plz try with another word...</h5>`;
                    html1 = '';
                }
            }
        }
        // console.log(content)
        content.innerHTML = html1;
        contValidate.innerHTML = html2;
    }))
}
let inputSearch = document.getElementById('inputSearch')
let btnSearch = document.getElementById('btnSearch')

let article = document.getElementById("article")
content.classList.add("hide");
article.classList.add("hide");
contValidate.classList.add("hide");


btnSearch.addEventListener("click", function(e) {
    let word = inputSearch.value
    if (word != "") {
        content.classList.remove("hide");
        article.classList.remove("hide");
        contValidate.classList.remove("hide");

        articles(word);
    } else {
        word = "india";
        content.classList.add("hide");
        article.classList.add("hide");
        contValidate.classList.add("hide");

        // articles(word);
    }

    window.location.assign("#article");

})
let inputSort = document.getElementById("inputSort")
let btnSort = document.getElementById("btnSort")
btnSort.addEventListener("click", function(e) {
    let word = inputSort.value
    if (word != "") {
        content.classList.remove("hide");
        article.classList.remove("hide");
        contValidate.classList.remove("hide");

        articles(word);
    } else {
        word = "india";
        content.classList.add("hide");
        article.classList.add("hide");
        contValidate.classList.add("hide");

        console.log(word)
            // articles(word);
    }

    window.location.assign("#article");
})

// cards
function cardDisplay() {
    let api = "626f974c13eb498784ad788881bb453b";
    // let api = "210c65e6d60d4c10804c39ff7265c891";
    rate = "rateLimited";
    excludes = "reuters.com"
    try {
        keyword = String(pageType.innerHTML);
    } catch {
        keyword = "india";
    }
    try {
        category = String(pageCategory.innerHTML);
    } catch {
        category = "general"
    }
    const d = new Date();
    let fromdate = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()%30}`;
    let todate = `${d.getFullYear()}-${d.getMonth()+1}-${Math.abs(d.getDate()-5)%30}`;

    let url = `https://newsapi.org/v2/everything?language=en&q=${category}&from=${fromdate}&to=${todate}&sortBy=relevancy&excludeDomains=${excludes}&apiKey=${api}`;
    let html = "";
    let htmlsI = "";
    fetch(url).then((Response) => Response.json().then((data) => {
        for (keys in data) {
            for (elem in data[keys]) {
                if (elem > 1 && elem < 30 && elem % 2 == 1 && data[keys][elem].urlToImage != null && data[keys][elem].url != null && data[keys][elem].title != null) {
                    // console.log(Math.floor(elem / 2))
                    html += `
                    <div class="grid-item item${Math.floor(elem/2)}">
                    <div class="scene scene--card">
                        <div class="carded">
                            <div class="card__face card__face--front">
                            <div class="card bg-dark text-white" style="width:100% ;height: 100%;">
                            <img src="${data[keys][elem].urlToImage}" class="card-img" onerror="this.onerror=null;this.src='http://vskills.in/certification/blog/wp-content/uploads/2015/01/structure-of-a-news-report.jpg';" style="width:100%; height:100%;" alt="...">
                            <div class="card-img-overlay">
                            <a href="${data[keys][elem].url}" target="_blank" rel="noopener noreferrer" style="text-decoration:none;color:white"> 
                            <h5 class="card-title" id="cTitle">${data[keys][elem].title}</h5></a>
                            </div>
                          </div>
                        </div>
                            <div class="card__face card__face--back">
                            <div class="card bg-dark text-white" style="width:100% ;height: 100%;">
                            <img src="${data[keys][elem-1].urlToImage}" class="card-img" onerror="this.onerror=null;this.src='http://vskills.in/certification/blog/wp-content/uploads/2015/01/structure-of-a-news-report.jpg';" style="width:100%; height:100%;" alt="...">
                            <div class="card-img-overlay">
                            <a href="${data[keys][elem-1].url}" target="_blank" rel="noopener noreferrer" style="text-decoration:none;color:white"> 
                            <h5 class="card-title" id="cTitle">${data[keys][elem-1].title}</h5></a></div>
                           </div>
                           </div>
                        </div>
                    </div>

                </div>
                    `;
                    // console.log(data[keys][elem])
                }
                // console.log(data[keys][elem])

            }
        };

        cardHolder.innerHTML = html;
        // console.log(html)
    }))
}

let carded = document.getElementsByClassName("carded")
    // console.log(carded)
cardDisplay();
setInterval(() => {
    Array.from(carded).forEach(element => {
        element.classList.toggle('is-flipped');
        element.classList.toggle("is-flipped")
    });
}, 8000);