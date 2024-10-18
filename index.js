"use strict";

const journey = document.querySelector(".journey");
const journeyBtn = document.getElementById("journey__btn");
const journeyHead = document.getElementById("journey__head");
const journeyList = document.querySelector(".journey__list");
const group2 = document.querySelector(".group-2");
const assetContainer = document.querySelector(".dashboard__block--3");
const number = document.querySelector(".number");

const json = {
  _id: {
    $oid: "63b64dc9e3b230ebb60a495d",
  },
  _key: "topic:2085",
  category: "Course",
  cid: {
    $numberDouble: "NaN",
  },
  commitment: "4 hours",
  commitment_type: "custom",
  deadline: "",
  description:
    "\u003Cp\u003EHave you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.\u003C/p\u003E\n\u003Cp\u003ELet's prepare Sandwiches, we will use Pareto&rsquo;s Law. That&rsquo;s an 80-20 approach.\u003Cbr\u003E80% of the time in researching, and planning and 20% of the time in implementation.\u003C/p\u003E\n\u003Cp\u003ESo for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.\u003C/p\u003E\n\u003Cp\u003ESimilarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.\u003C/p\u003E\n\u003Cp\u003ELet's start thinking together, and search for how you can get the essence of project management.\u003C/p\u003E",
  faqs: [],
  globalTags: [],
  isActive: true,
  lastposttime: 0,
  learning_outcomes: [
    "Bare minimum knowledge of project management",
    "4SA Concept",
    "Would be able to handle any project efficiently",
  ],
  mainPid: 0,
  postcount: 0,
  pre_requisites: [
    "An open mind to learn any concept",
    "Thought of Unlearning and Relearning ",
  ],
  project_image:
    "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
  short_description:
    "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
  slug: "2085/technical-project-management",
  status: "published",
  tasks: [
    {
      task_id: 18882,
      task_title: "Explore the world of management",
      task_description:
        "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
      status: "notworkyet",
      assets: [
        {
          asset_id: 18883,
          asset_title: "Technical Project Management",
          asset_description:
            "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
          // asset_content: " https://www.youtube.com/embed/TiMRwri1xJ8",
          asset_content: `<div class="video__box">
                                <iframe width="100%" height="100%" src=" https://www.youtube.com/embed/TiMRwri1xJ8"
                                    frameborder="0"></iframe>
                            </div>`,
          asset_type: "display_asset",
          asset_content_type: "video",
        },
        {
          asset_id: 18884,
          asset_title: "Threadbuild",
          asset_description:
            "Watch the video and thread build, and jot out key threads while watching that video.",
          asset_content: `      <div class="thread">
                                <div class="thread__headbox">
                                    <p>Thread A <i class="fa-solid fa-angle-down"></i></p>
                                </div>

                                <div class="thread__textareabox">


                                    <div id="textareabox--1">
                                        <div class="textarea">
                                            <div class="textarea__headbox">
                                                <p class="textarea__head">Sub thread 1</p>
                                            </div>
                                            <textarea name="" class="textarea__input"
                                                placeholder="Enter text here"></textarea>
                                        </div>
                                        <div class="textarea__iconbox">
                                            <svg class="icon" id="Layer_1" height="512" viewBox="0 0 24 24" width="512"
                                                xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
                                                <path
                                                    d="m5.868 15.583a8.938 8.938 0 0 1 -2.793-7.761 9 9 0 1 1 14.857 7.941 5.741 5.741 0 0 0 -1.594 2.237h-3.338v-7.184a3 3 0 0 0 2-2.816 1 1 0 0 0 -2 0 1 1 0 0 1 -2 0 1 1 0 0 0 -2 0 3 3 0 0 0 2 2.816v7.184h-3.437a6.839 6.839 0 0 0 -1.695-2.417zm2.132 4.417v.31a3.694 3.694 0 0 0 3.69 3.69h.62a3.694 3.694 0 0 0 3.69-3.69v-.31z" />
                                            </svg>

                                          
                                            <svg xmlns="http://www.w3.org/2000/svg" id="Filled" class="icon"
                                                viewBox="0 0 24 24" width="512" height="512">
                                                <path
                                                    d="M20,0H4A4,4,0,0,0,0,4V16a4,4,0,0,0,4,4H6.9l4.451,3.763a1,1,0,0,0,1.292,0L17.1,20H20a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0ZM7,5h5a1,1,0,0,1,0,2H7A1,1,0,0,1,7,5ZM17,15H7a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Zm0-4H7A1,1,0,0,1,7,9H17a1,1,0,0,1,0,2Z" />
                                            </svg>

                                       
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" id="Layer_1"
                                                data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512">
                                                <path
                                                    d="M19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-7,19c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5,.672,1.5,1.5-.672,1.5-1.5,1.5Zm1.928-6.512c-.521,.287-.928,.952-.928,1.512,0,.553-.448,1-1,1s-1-.447-1-1c0-1.284,.807-2.626,1.963-3.264,.763-.42,1.157-1.254,1.004-2.125-.138-.787-.81-1.458-1.596-1.596-.606-.107-1.195,.047-1.656,.435-.455,.381-.715,.94-.715,1.533,0,.552-.448,1-1,1s-1-.448-1-1c0-1.185,.521-2.302,1.429-3.064,.908-.762,2.109-1.077,3.287-.873,1.613,.282,2.938,1.606,3.221,3.22,.298,1.699-.509,3.395-2.009,4.222Z" />
                                            </svg>

                                         
                                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" class="icon"
                                                data-name="Layer 1" viewBox="0 0 24 24">
                                                <path
                                                    d="m11,22C5.66,22,1.03,18.04.031,12.993c-.224-1.134.804-2.162,1.938-1.938,5.047.999,9.031,5.604,9.031,10.944Zm5.995-10.947c-.168-2.642-1.64-5.558-3.544-7.932-.745-.929-2.156-.929-2.902,0-1.904,2.374-3.377,5.29-3.544,7.932,2.213,1.421,3.969,3.495,4.995,5.947,1.026-2.452,2.782-4.526,4.995-5.947Zm5.036.003c-5.047.999-9.031,5.604-9.031,10.944,5.34,0,9.97-3.96,10.969-9.007.224-1.134-.804-2.162-1.938-1.938Z" />
                                            </svg>

                                        </div>
                                    </div>

                                    <div id="textareabox--2">
                                        <div class="textarea">
                                            <div class="textarea__headbox">
                                                <p class="textarea__head">Sub Interpretation 1</p>
                                            </div>
                                            <textarea name="" class="textarea__input"
                                                placeholder="Enter text here"></textarea>
                                        </div>

                                        <div class="textarea__dropdownbox">

                                            <select name="category" id="category">
                                                <option>Select category</option>
                                                <option value="remark">Remark</option>
                                                <option value="subargument">Subargument</option>
                                                <option value="subexplanation">Subexplanation</option>
                                                <option value="coreprinciple">Coreprinciple</option>
                                            </select><select name="process" id="process">
                                                <option>Select process</option>
                                                <option value="question">Question</option>
                                                <option value="analogy">Analogy</option>
                                                <option value="sarcasm">Sarcasm</option>
                                                <option value="insight">Insight</option>
                                                <option value="counterexample">Counterexample</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="sub-thread__btnbox">
                                    <button class="sub-thread__btn">+ Sub thread</button>
                                </div>

                                <div class="thread__textareabox">
                                    <div id="textareabox--3">
                                        <div class="textarea">
                                            <div class="textarea__headbox">
                                                <p class="textarea__head">Sub thread 1</p>
                                            </div>
                                            <textarea name="" class="textarea__input"
                                                placeholder="Enter text here"></textarea>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                </div>
                            </div>`,
          asset_type: "input_asset",
          asset_content_type: "threadbuilder",
        },
        {
          asset_id: 18885,
          asset_title: "Structure you pointers ",
          asset_description:
            "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
          asset_content: `<form action="" class="form">
                                <div class="form__block">
                                    <label for="title" class="form__label">Title</label>
                                    <input class="form__input" type="text" name="title" id="">
                                </div>

                                <div class="form__block">
                                    <label for="content" class="form__label">Content</label>
                                    <div class="content__menu">
                                        <div class="content__menu--listbox">

                                            <div class="content__menu--list">File</div>
                                            <div class="content__menu--list">Edit</div>
                                            <div class="content__menu--list">View</div>
                                            <div class="content__menu--list">Insert</div>
                                            <div class="content__menu--list">Format</div>
                                            <div class="content__menu--list">Tools</div>
                                            <div class="content__menu--list">Table</div>
                                            <div class="content__menu--list">Help</div>
                                        </div>

                                        <div class="content__menu--tools">
                                            <svg width="21" height="18" viewBox="0 0 21 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7.79978 3.1501L3.15002 7.13561M3.15002 7.13561L7.79978 11.1211M3.15002 7.13561L13.85 7.13561C16.0592 7.13561 17.85 8.92647 17.85 11.1356V14.8501"
                                                    stroke="#616161" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.9431 3.32505L16.15 7.53197M16.15 7.53197L11.9431 11.7389M16.15 7.53197H6.85003C4.64089 7.53197 2.85003 9.32284 2.85003 11.532V15.675"
                                                    stroke="#616161" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.5961 1.8999H17.0995M17.0995 1.8999V7.40335M17.0995 1.8999L11.5961 7.40335M7.40397 17.0999H1.90052M1.90052 17.0999V11.5964M1.90052 17.0999L7.60052 11.3999M17.1 11.596V17.0994M17.1 17.0994H11.5966M17.1 17.0994L11.5966 11.596M1.90002 7.40385L1.90002 1.9004M1.90002 1.9004L7.40348 1.9004M1.90002 1.9004L7.60002 7.6004"
                                                    stroke="#616161" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                            <div class="content__highlighter">
                                                <p>Paragraph</p>
                                            </div>
                                            <i class="fa-solid fa-ellipsis"></i>
                                        </div>
                                    </div>
                                    <input class="form__input" type="text" name="content">
                                </div>
                            </form>`,
          asset_type: "input_asset",
          asset_content_type: "article",
        },
        {
          asset_id: 18886,
          asset_title: "4SA Method",
          asset_description: "To explore more read more",
          asset_content: `<div class="asset-4__wrapper">
                                <div class="asset-4__headbox">
                                    <p class="asset-4__head"><i class="fa-solid fa-angle-down"></i> Introduction</p>
                                    <p class="asset-4__description">The 4SA Method , How to bring a idea into progress
                                        ?<span class="asset-4__see-more">See more</span>
                                    </p>

                                </div>

                                <div class="asset-4__headbox">
                                    <p class="asset-4__head"><i class="fa-solid fa-angle-down"></i> Thread A</p>
                                    <p class="asset-4__description">The 4SA Method , How to bring a idea into progress
                                        ?How are you going to develop your stratergy ? Which method are you going to use
                                        to develop a stratergy ? What if the
                                        project is lengthy?<span class="asset-4__see-more">See more</span>
                                    </p>

                                    <div class="asset-4__headbox">
                                        <p class="asset-4__head">Example 1</p>
                                        <p class="asset-4__description">You have a concept , How will you put into
                                            progress?
                                        </p>
                                    </div>
                                </div>`,
          // asset_content:
          //   " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
          asset_type: "display_asset",
          asset_content_type: "article",
        },
      ],
    },
  ],
  tid: 2085,
  timestamp: 1672891849700,
  title: "Technical Project Management",
  type: "project",
  uid: 100,
  viewcount: 0,
  publishedAt: 1672893847792,
};

/**
 * Adds an event listener to the journeyBtn element that toggles the visibility of various elements when clicked.
 * @param {Event} event - The click event.
 */
journeyBtn.addEventListener("click", function (event) {
  journey.classList.toggle("journey__not-collapsed");
  journeyBtn.classList.toggle("journey__btn--rotate");
  journeyHead.classList.toggle("hidden");
  journeyList.classList.toggle("hidden");
  number.classList.toggle("hidden");
  json.tasks.map((task) =>
    task.assets.map((el) => {
      const li = document.createElement("li"); // Create <li> element
      li.textContent = el.asset_title;
      journeyList.append(li);
    })
  );
});

/**
 * Generates markup for a task.
 * @param {object} task - The task object.
 * @param {string} task.asset_title - The title of the task.
 * @param {string} task.asset_description - The description of the task.
 * @param {string} task.asset_content - The content of the task.
 * @returns {string} - The generated markup for the task.
 */
const generateMarkupTask = function (task) {
  const markup = `
  <div class="block">
      <div class="block__headbox">
        <p class="block__head">${task.asset_title} <i class="fa-solid fa-angle-down"></i></p>
      </div>
      <div class="block__descriptionbox">
        <p class="block__description"><span>Description: </span>${task.asset_description}</p>
      </div>
      <div class="block__contentbox">${task.asset_content}
        
      </div>
  </div>`;

  return markup;
};

/**
 * Initializes the application by generating markup for tasks and inserting it into the asset container.
 */
const init = function () {
  const markup = json.tasks.map((task) =>
    task.assets.map((el) => generateMarkupTask(el)).join("")
  );
  assetContainer.insertAdjacentHTML("afterbegin", ...markup);
};

init();
