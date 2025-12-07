# 🎆 Fireworks Profile Card

A modern and interactive **React + Tailwind CSS** profile card with animated emoji fireworks on button click.


## 📸 Preview

<img width="1283" height="515" alt="github" src="https://github.com/user-attachments/assets/eda49794-e559-4c8c-8ed1-496fe59de089" />

## ✨ Features

* Animated emoji fireworks effect
* Smooth hover animations
* Gradient border profile image
* Fully responsive
* Clean, modern UI
* Built with React + Tailwind CSS
* Simple and reusable component

## 📂 Project Structure

```
src/
 └── components/
       └── ProfileCard.jsx   ← main component
public/
 └── dp.jpg                  ← your profile image
```



## 🚀 How It Works

1. Clicking the **Follow me❤️** button triggers a function.
2. The function generates randomly placed and rotated emoji “particles”.
3. The particles appear briefly and disappear automatically after 1.2 seconds.
4. The entire card slightly scales on hover for a smooth modern feel.



## 🛠 Usage

Import and render the component:

```jsx
import ProfileCard from "./components/ProfileCard";

function App() {
  return <ProfileCard />;
}

export default App;
```

Make sure Tailwind CSS is installed and configured in your project.


## 📦 Installation

```bash
npm install
npm run dev
```

## 🧪 Technologies Used

* React (Vite)
* Tailwind CSS
* JavaScript (ES6)
* CSS animations


## 🎨 Customization

You can easily customize:

* Name
* Job title
* Profile photo
* Button text
* Firework emojis
* Card colors and gradients


