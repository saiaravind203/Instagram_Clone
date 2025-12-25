
### 🧾 Overview

This project is a simple **Instagram-style feed** built using:

* HTML
* CSS
* JavaScript

The feed displays posts dynamically from a JavaScript array and allows the user to:

* ❤️ like and unlike posts
* 🔁 automatically update like counts
* 🖼️ display user avatars and post images

Each post maintains its own **state** using a `liked` Boolean and a `likes` count.

---

## 📂 Project Structure

```
project-folder/
│
├── index.html
├── index.css
├── index.js
└── images/
    ├── avatar-vangogh.jpg
    ├── avatar-courbet.jpg
    ├── avatar-ducreux.jpg
    ├── post-vangogh.jpg
    ├── post-courbet.jpg
    ├── post-ducreux.jpg
    ├── icon-heart.png
    └── heart.png
```

> Make sure the image names and paths match exactly.

---

## 🧠 How It Works

### 1️⃣ Post data

Posts are stored in a **JavaScript array of objects**:

* name
* username
* location
* avatar image
* post image
* comment
* likes
* liked flag (true/false)

### 2️⃣ Rendering posts

The `render()` function:

* loops through the posts
* generates HTML dynamically
* injects it into the page using `innerHTML`

### 3️⃣ Like button behavior

For each post:

* clicking ❤️ toggles `liked`
* like count increases or decreases
* heart icon switches image
* UI updates instantly

No page reloads are required.

---

## ▶️ How to Run

1. Download or clone the project
2. Place files in same folder structure
3. Open `index.html` in any browser
4. Click ❤️ icons to like/unlike posts

No framework or server required.

---

## 🛠️ Key JavaScript Features Used

* arrays & objects
* DOM manipulation
* template literals
* `addEventListener`
* `getElementById` or `querySelectorAll`
* conditional logic (`if / else`)

---

## ✨ Possible Improvements (Next Steps)

You can extend the project by adding:

* double-tap to like on image
* comments typing box
* save/bookmark button
* dark mode
* localStorage to remember likes
* animations on heart icon

---

If you want, tell me:

* 💡 “Beginner” README or “advanced technical” README?
* 📸 Want screenshots added?
* 🧩 Do you want me to include your exact full project code also?

I can customize it accordingly.
