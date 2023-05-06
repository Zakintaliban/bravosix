# BravoSix

Bravo Six adalah modul Node yang memungkinkan Anda mengganti tema warna elemen HTML dengan mudah.

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
bravoSix.applyColors("dark"); // Mengganti tema warna menjadi hitam-putih
```

### Tema Warna

- `"dark"`: latar belakang hitam dan teks putih
- `"light"`: latar belakang putih dan teks hitam
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
        newTheme = "dark";
        break;
      case "dark":
        newTheme = "light";
        break;
      case "light":
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

berikut yang kurang:

- animasinya harus berbentuk bulat

- setelah animasi selesai, langsung warna berubah menjadi night vision, jadi kek function untuk night vision dipanggil, gitu loh
