//saveToExcel.js

import XLSX from "./xslx";

const saveToExcel = (data) => {
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet([data]);

  XLSX.utils.book_append_sheet(wb, ws, 'Login Information');

  XLSX.writeFile(wb, 'login_information.xlsx');
};

export default saveToExcel;
