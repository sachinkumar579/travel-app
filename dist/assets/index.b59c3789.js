import{j as m,R as E,a as f}from"./vendor.dc573bc2.js";const p=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const t of n.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&a(t)}).observe(document,{childList:!0,subtree:!0});function c(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=c(r);fetch(r.href,n)}};p();var u="/travel-app/dist/assets/gear.e62ab1dd.png";const A=m.exports.jsx,e=m.exports.jsxs;function s({border:i}){return e("div",{className:i?"category curved-border":"category",children:[A("img",{src:u}),A("h4",{children:"Calculated Weather"}),A("div",{className:"category-text",children:"Some text here some text here here some text here some text here here"})]})}function D(){return e("div",{className:"categories",children:[A("h4",{children:"CATEGORY"}),A("h2",{children:"We Offer Best Services"}),e("div",{className:"groups",children:[A(s,{}),A(s,{border:"yes"}),A(s,{}),A(s,{})]})]})}var R="data:image/png;base64,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";function Q(){return e("header",{className:"header",children:[A("img",{src:R,style:{width:"150px",height:"100px"}}),A("div",{children:e("nav",{className:"navigation",children:[A("a",{href:"#",children:"Destination"}),A("a",{href:"#",children:"Hotels"}),A("a",{href:"#",children:"Flights"}),A("a",{href:"#",children:"Bookings"}),A("a",{href:"#",children:"Login"}),A("button",{children:"Sign Up"}),A("select",{children:A("option",{value:"EN",children:"EN"})})]})})]})}function P(){return e("div",{className:"title-description",children:[A("h6",{children:"BEST DESTINATIONS AROUND THE WORLD"}),e("h1",{children:["Travel,enjoy ",A("br",{}),"and live a new ",A("br",{})," and full life"]}),e("h5",{children:["Built some text some text some text some text some text. ",A("br",{}),"Some text some text some text some text some text ",A("br",{}),"some text some text"]}),e("div",{className:"demo-items",children:[A("button",{className:"find-out-more",children:"Find out more"}),A("button",{className:"play"}),A("span",{children:"Play Demo"})]})]})}function b({name:i,price:o}){return e("div",{className:"place",children:[A("div",{children:i}),A("div",{children:o})]})}var B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAfCAYAAAClDZ5ZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAIKSURBVFhH7ZfPa9NgGMe/Ccm21i4tK7FWkW2MKbKDePDgDh68ijLZbYgHB54ULxtjY4jiD3YSUTbFf0HmReofoHi0nShu7uCh3cY226wt3dKsbV6Tl3c69Jj3DW3oB16S53lCyDff98n7Rqpa+wQBQGbHlkcyq1YgHKFCZFliYesi2bZNJKn1hchBEOESmGZvC2k22kKajbYQr+TW1vDh4ycWcYD4TDqdIZevXiOdR2LO1kghbxbfsoo3fHPkXeo9zp2/gOGLl5DOLCGZPIaQpiEWjbIrvCG5ati5EBZevcajJ3OoVHahRTV0qCrN12o1RB0h3758prFXhDiyZ5qYnJqGFk9g9t59qM7Dx+M9f0S4FIslPH74gEXe4epINpvDxNSMM41S6I5EEA6HIcv/v6t6vQ5FUfBz9TvLeIebEPc2styBo8dPIBTqwuHN6L8bU8Mw8PzZU9y4PsYy3uHqyOmhs8jmclCVv1NIURXaCwdiGo2G0y8VFLbWacwNVwhPLMsiTiPT4bK5uUUiMZ30D56hI6YnyYv5l7TGE+FfLWOniJN9A0gkEnB+4lAul2Fsb7AqP4SvI7bdYGegU+rundss4otwR/L5AnoHTkHXdeQLBVR2frEKX8Q7QmyYZhWlUhm3xm+yLH+EO+JyZWQUKz9Wsfw1Q9cPEfgixA982zSKpi2k2QiIEOA3lPYXtZC2kQEAAAAASUVORK5CYII=";function d({img:i,name:o,price:c,tripDays:a}){return e("div",{className:"destination",children:[A("img",{src:i,className:"travel-image"}),A(b,{name:o,price:c}),e("div",{className:"trip-days",children:[A("img",{src:B}),e("span",{children:[a," Days Trip"]})]})]})}var C="/travel-app/dist/assets/rome.f437e142.jpg",I="/travel-app/dist/assets/london.d8b74728.jpg",N="/travel-app/dist/assets/europe.75c2fa47.jpg";function H(){return e("div",{className:"destinations",children:[A("h4",{children:"Top Selling"}),A("h2",{children:"Top Destinations"}),e("div",{className:"groups",children:[A(d,{img:C,name:"Rome,Italy",price:"$5,42k",tripDays:"10"}),A(d,{img:I,name:"London,UK",price:"$4.2k",tripDays:"12"}),A(d,{img:N,name:"Full Europe",price:"$15k",tripDays:"28"})]})]})}var U="/travel-app/dist/assets/some-image.2766cf8d.jpg";function l({color:i}){return e("div",{className:"steps",children:[A("div",{style:{width:"50px",height:"50px",backgroundColor:i,borderRadius:"10px",marginRight:"10px"}}),e("div",{children:[A("div",{className:"title",children:"Choose Destination"}),e("span",{children:["Some text here some text here Some text here",A("br",{}),"some text here some text here some text here"]})]})]})}var g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAJdSURBVFhHzZiLbpswFIYPNBcSQlqqquu0apr2/u+0qV2nqmtLLiUQkpbxuwcEBAMxhfJJKLax5E8mvpyj+dsgpCPY7fbkb7fkbnwKgh23FjMaDcmcGmSMxzQcDri1PrXlon60fnHJ87bcchyTyZismRmJjrilmkq5IIik3A25rs8tzTBNgyxzGs1qtWSp3HL1Ip42OJ3PxFOGVO7h8Zl8P+BaOxjGiC4vzrl2SKHczZ97LnXD9+srLmXR+TfBcZZc6g7ZmBk5/PHXrse17sCYGDtPIodV6TgrrnUPxoZDmkSuyLxr8g5CDhvsR+1jTYADXGKEHHb+vpB20XFWqh5JbQAXOAF9433+58wTO2m/bv6GsakK+BM/L5a0Wr8fc3NrRudnp+L8VAU3mK9fLt4/qyqQ+n17l4gBlNGGd6rA6S0Ms5vwMbi+R3f3D1w7BO/QR5XX/V5d7vFpwSU5dfrI2L++qculP6WMOn1k7JrMXBcoy2FVVlGnj4zhYKAuh+2iijp9ZAxOdHU57GPfri65dgjeNdnrTjBzCN9Uwcz8/HGd+Xwoo63JrMFJ1zTS/j05obNYc3M/sM8sEUbqCHj7Ruyk4xxDwNsX4BJnB8SCwBT2hbSLkEOKAJH4ZwOHdLoi2UqaLPuPIu+QyCF3UZUeaBOMnc+fZDZhdECKoGswZtHEZORAWe6iLWRjShM5SBG0Hf1b5oRsW36SlKbAEB+0lQWw7XnlIiyVA71NHqZBJN67tGseREaIK/FURW44hqYTQzytJqyLQPiGKAnBCO78ADdYXBTFfSy69qhD9B9f9S0kZpeTAgAAAABJRU5ErkJggg==",w="data:image/png;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAATABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9kvjB+2KfhB421jSbjwfqV5baNFDcSX66nZQwvHKFwwWSUOPnLJggElGIBAzXy+fjh4u8NyLp99rGrrc2bavbXLXmu3rXEbWNrBKDKyalHEXLSnzCBHGcAqUjKyv03/BRKESfEDxgzR7/AC/DUYyYt+zddWfGfIl27tnTcm/Z9y48vda5fj74O+Ih8WESNbcR61qerTwXCXjLHaDVZFs7TzAArq3nQuX8kHYGDbmYuxAPsD9m57yX4KaHJfX15qF1MksrzXUryyfNM7BNz/OQgIQb8ttUbiTk0VJ+zvbNZfBfQYWVVaGFo2C42grIwOMBRjjso+g6UUAZvjH9mDwf418W6hrWoW+vNqGqlDctD4i1G3jbbHHGAscc6xou2JCVRQCwLEFmZjln9jL4fmaKT7D4g8yAxmJ/+En1TdF5bmSPaftGRskJdcfdYlhg80UUAegfDzwDpnww8I22i6Ol5Hp9q0skS3N7PeSKZJGlb95M7yEbnbALEKuFUBVABRRQB//Z",S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAGuSURBVDhPpdTdK0NhHAfw52wnVlIKsYa8rkysZRElpSYLkVYYcqlE8lqulBRR/gBR0l7IjZdciH8B9xTiZrvycrft8HWeZz9m9sLyuTrf33P6ntNzXiSo2Dc+n489Pb+wivIyJssyTSOur29YSAmxKpOJJj/wQu7h4RGlRhP0hSWoa2wCk3Vw9A3QKuD27qkXlmE01cBcWw9NWgZW19ZpNUIUKooiTj46PhHDTyOjYygqNWJmbh75BcXw+/20AgSDQWTl6OFye2kSJgr7B4exvLImBj8tLC4hO89AKVogEODbRSlMpKxcPV5eX8UgVRZrAy4urygBGtpHJkkSP0yZLGvZ2/s7JRVvtXd2Y8fl5ocpo4ovIt3e3asLkronQTH8K5u9A5PTs5TCvupPz87VUo14en/R1t6FFpudUkTU/R4cHkOTngHlTaFJfJ3dDjS3tFKKFr0Bqt29fWh1mZRiOXqd4sVPJKaQ8/CvQkqjFNHnHEK1xUopvriFnMvjBdPqKIVf/ipzLaXEEhZyG5tbyDcUY3xiCpXVFpoml7SQ295xoaOrh9LvYn5f/8PYB8inqacewgXBAAAAAElFTkSuQmCC";function F(){return e("div",{className:"booking-trip",children:[e("section",{children:[A("div",{children:"Easy and Fast"}),e("div",{className:"heading",children:["Book Your Next Trip ",A("br",{})," In 3 Easy Trips"]}),e("div",{className:"booking-steps",children:[A(l,{color:"yellow"}),A(l,{color:"red"}),A(l,{color:"blue"})]})]}),A("aside",{children:e("div",{className:"trip-details",children:[A("div",{children:A("img",{src:U,className:"cover-image"})}),A("div",{className:"title",children:"Trip To Greece"}),A("small",{children:"14-29 June | by Robbin "}),e("div",{className:"icons",children:[A("img",{src:g}),A("img",{src:g}),A("img",{src:g})]}),e("div",{className:"people-count",children:[e("div",{children:[A("img",{src:w})," ",A("small",{children:"24 people going"})," "]}),A("div",{children:A("img",{src:S})})]})]})})]})}function y(){return e("div",{className:"subscribe",children:[A("div",{className:"heading",children:"Subscribe to get information ,latest news and other interesting offers about Cobham"}),e("div",{className:"subscribe-option",children:[e("div",{className:"subscriber-id",children:[A("i",{className:"fa fa-envelope icon"}),A("input",{type:"text",placeholder:"Your email"})]}),A("button",{children:"Subscribe"})]})]})}function h({data:i}){return e("div",{className:"footer-element",children:[A("div",{className:"heading",children:i.heading}),i.values.map((o,c)=>A("div",{className:"items",children:A("a",{href:"#",children:o})},c))]})}var M="data:image/png;base64,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",x="data:image/png;base64,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",J="data:image/png;base64,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",L="data:image/png;base64,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";function O(){return e("div",{className:"social-media-icons",children:[A("img",{src:M}),A("img",{src:J}),A("img",{src:x}),A("div",{children:A("div",{children:"Discover our app"})}),e("div",{className:"playstore",children:[e("div",{className:"google-play",children:[A("img",{src:"https://cdn-icons-png.flaticon.com/512/888/888857.png",style:{width:"30px",height:"30px"}}),e("div",{children:[A("strong",{children:"GET IT ON"})," ",A("br",{}),A("span",{children:"GOOGLE PLAY"})]})]}),e("div",{className:"apple-store",children:[A("img",{src:L,style:{width:"30px",height:"30px"}}),A("div",{children:e("span",{children:["Available on the ",A("br",{}),A("strong",{className:"title",children:"Apple Store"})]})})]})]})]})}function j(){return e("div",{children:[A("div",{className:"footer-heading",children:"Jadoo."}),e("div",{className:"footer-heading-text",children:["Book your trip in minutes, get full ",A("br",{}),"Control for much longer"]})]})}const X=[{heading:"Company",values:["About","Careers","Mobile"]},{heading:"Contact",values:["Help/FAQ","Press","Affiliates"]},{heading:"More",values:["Airline Fees","Airline","Low fare tips"]}];var v={data:X};function W(){return e("footer",{children:[e("div",{className:"footer",children:[A(j,{}),A(h,{data:v.data[0]}),A(h,{data:v.data[1]}),A(h,{data:v.data[2]}),A(O,{})]}),A("div",{className:"copyright",children:"All rights reserved@jadoo.co"})]})}function T(){return e("div",{className:"App",children:[A(Q,{}),A(P,{}),A(D,{}),A(H,{}),A(F,{}),A(y,{}),A(W,{})]})}E.render(A(f.StrictMode,{children:A(T,{})}),document.getElementById("root"));
