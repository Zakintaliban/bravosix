# BravoSix

BravoSix adalah pustaka JavaScript untuk mengganti tema warna elemen HTML dengan animasi efek "going dark" seperti night vision.

## Instalasi

Anda dapat menginstal BravoSix melalui NPM:

```bash
npm install bravosix
```

## Cara Penggunaan

Berikut adalah contoh penggunaan BravoSix dalam aplikasi React:

1. Import BravoSix

```javascript
import BravoSix from "bravosix";
```

2. Buat instance BravoSix

```javascript
const bravosix = new BravoSix();
```

3. Gunakan metode `applyColors(colorTheme)`

Metode ini mengganti tema warna elemen tanpa animasi.

```javascript
bravosix.applyColors(colorTheme);
```

`colorTheme` dapat berupa:

- "original"
- "dark"
- "light"
- "night-vision" terinspirasi dari night vision di game Call of Duty: Modern Warfare II (2022)

Contoh menggunakan `applyColors` dalam aplikasi React:

```javascript
const handleButtonClick = () => {
  let newTheme;
  switch (colorTheme) {
    case "original":
      newTheme = "dark";
      break;
    case "dark":
      newTheme = "light";
      break;
    case "light":
      newTheme = "original";
      break;
    default:
      newTheme = "original";
  }
  setColorTheme(newTheme);
  setIsNightVision(false);
  bravosix.applyColors(newTheme);
};
```

4. Gunakan metode `goingDark()`

Metode ini memulai animasi efek "going dark" dan mengganti tema warna menjadi night vision.

```javascript
bravosix.goingDark();
```

Contoh lengkap dengan `applyColors` dan `goingDark`:

```javascript
import React, { useState, useEffect } from "react";
import "./App.css";
import BravoSix from "bravosix";

function App() {
const [colorTheme, setColorTheme] = useState("original");
const [isNightVision, setIsNightVision] = useState(false);
const [bravosix, setBravosix] = useState(null);

useEffect(() => {
setBravosix(new BravoSix());
}, []);

const handleButtonClick = () => {
let newTheme;
switch (colorTheme) {
case "original":
newTheme = "dark";
break;
case "dark":
newTheme = "light";
break;
case "light":
newTheme = "original";
break;
default:
newTheme = "original";
}
setColorTheme(newTheme);
setIsNightVision(false);
bravosix.applyColors(newTheme);
};

const handleGoingDarkClick = () => {
if (isNightVision) {
setColorTheme("original");
setIsNightVision(false);
bravosix.applyColors("original");
} else {
setIsNightVision(true);
bravosix.goingDark();
}
};

return (

<div className="App">
<header className="App-header">
<h1>Klik tombol di bawah untuk mengganti tema warna:</h1>
<button onClick={handleButtonClick}>Ganti Tema Warna</button>
<button onClick={handleGoingDarkClick}>
{isNightVision ? "Kembali ke Original" : "Going Dark"}
</button>
</header>
</div>
```
