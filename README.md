# BravoSix

Modul untuk mengganti warna teks dan latar belakang di aplikasi React.

## Instalasi

```bash
npm install bravosix
```

## Penggunaan

1. Import module BravoSix:

```javascript
import BravoSix from "bravosix";
```

2. Buat instance BravoSix, opsional dengan menyediakan elemen target untuk mengganti warna:

```javascript
const bravoSix = new BravoSix(); // Jika tidak menyediakan argumen, elemen 'body' akan menjadi target
```

3. Gunakan metode applyColors untuk mengganti tema warna:

```javascript
bravoSix.applyColors("black-white"); // Mengganti tema warna menjadi hitam-putih
```

### Tema Warna

- `"black-white"`: latar belakang hitam dan teks putih
- `"white-black"`: latar belakang putih dan teks hitam
- `"night-vision"`: latar belakang _teal_ (#367978, terinspirasi dari Call of Duty©) dan teks putih

## Contoh Penggunaan di Aplikasi React

`App.js`;

```javascript
import React, { useState } from "react";
import BravoSix from "bravosix";

function App() {
  const [colorTheme, setColorTheme] = useState("original");
  const bravoSix = new BravoSix();

  const handleButtonClick = () => {
    let newTheme;
    switch (colorTheme) {
      case "original":
        newTheme = "black-white";
        break;
      case "black-white":
        newTheme = "white-black";
        break;
      case "white-black":
        newTheme = "night-vision";
        break;
      case "night-vision":
        newTheme = "original";
        break;
      default:
        newTheme = "original";
    }
    setColorTheme(newTheme);
    bravoSix.applyColors(newTheme);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Klik tombol di bawah untuk mengganti tema warna:</p>
        <button onClick={handleButtonClick}>Ganti Tema Warna</button>
      </header>
    </div>
  );
}

export default App;
```
