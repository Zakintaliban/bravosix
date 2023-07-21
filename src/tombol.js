function getButtonStyles() {
  return `
  .tombol {
      /* Styling button */
      background-color: #0d161c;
      color: #79d9ff;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      transition: all 0.4s ease-in-out;
  }

  .tombol:hover {
      background-color: #79d9ff;
      color: #0d161c;
  }

  .tombol:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(121, 217, 255, 0.5);
  }
  `;
}

export default getButtonStyles;
