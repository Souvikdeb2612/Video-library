const mongoose = require('mongoose');
const Blog = require('./models/blog');

const blogs= [
    {
        title:"12 Python Snippets That Will Boost Your Productivity",
        author:"Souvik",
        img:"https://miro.medium.com/max/700/0*X_QwXgS2U5n9-ttv",
        text: "I love Python snippets. I just love sitting down in from of an ipython shell and write simple and useful code. So, today I want to share some of the many Python snippets I wrote, gathered or found throughout my pythonic explorations."

    },
    {
        title:"12 Python Snippets That Will Boost Your Productivity",
        author:"Souvik",
        img:"https://miro.medium.com/max/700/0*X_QwXgS2U5n9-ttv",
        text: "I love Python snippets. I just love sitting down in from of an ipython shell and write simple and useful code. So, today I want to share some of the many Python snippets I wrote, gathered or found throughout my pythonic explorations."

    },
    {
        title:"12 Python Snippets That Will Boost Your Productivity",
        author:"Souvik",
        img:"https://miro.medium.com/max/700/0*X_QwXgS2U5n9-ttv",
        text: "I love Python snippets. I just love sitting down in from of an ipython shell and write simple and useful code. So, today I want to share some of the many Python snippets I wrote, gathered or found throughout my pythonic explorations."

    },
    {
        title:"12 Python Snippets That Will Boost Your Productivity",
        author:"Souvik",
        img:"https://miro.medium.com/max/700/0*X_QwXgS2U5n9-ttv",
        text: "I love Python snippets. I just love sitting down in from of an ipython shell and write simple and useful code. So, today I want to share some of the many Python snippets I wrote, gathered or found throughout my pythonic explorations."

    },
    {
        title:"12 Python Snippets That Will Boost Your Productivity",
        author:"Souvik",
        img:"https://miro.medium.com/max/700/0*X_QwXgS2U5n9-ttv",
        text: "I love Python snippets. I just love sitting down in from of an ipython shell and write simple and useful code. So, today I want to share some of the many Python snippets I wrote, gathered or found throughout my pythonic explorations."

    },
    {
        title:"12 Python Snippets That Will Boost Your Productivity",
        author:"Souvik",
        img:"https://miro.medium.com/max/700/0*X_QwXgS2U5n9-ttv",
        text: "I love Python snippets. I just love sitting down in from of an ipython shell and write simple and useful code. So, today I want to share some of the many Python snippets I wrote, gathered or found throughout my pythonic explorations."

    },
    {
        title:"12 Python Snippets That Will Boost Your Productivity",
        author:"Souvik",
        img:"https://miro.medium.com/max/700/0*X_QwXgS2U5n9-ttv",
        text: "I love Python snippets. I just love sitting down in from of an ipython shell and write simple and useful code. So, today I want to share some of the many Python snippets I wrote, gathered or found throughout my pythonic explorations."

    },
]


const seedDB = async ()=>{
    await Blog.insertMany(blogs);
    console.log("Database seeded");
}

module.exports = seedDB;