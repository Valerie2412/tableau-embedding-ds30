let viz;

// 1. Create vairable to store viz contianer
const vizContainer = document.getElementById("vizContainer");

// 2. Create a vairable to store the dashboard options
const options = {
  device: "desktop",
  height: "800px",
  width: "1100px",
};

// 3. Create a vairable to store the URL

const url =
  "https://public.tableau.com/views/EmbeddingWorkbookProfitsAcrossME-Asia/OfficeSupplyProfitsacrossMEandAsia";

// 4. Define function to load dashbaord

function initViz() {
  viz = new tableau.Viz(vizContainer, url, options);
}

//5. Execute fucntion to actually load the dashboard
document.addEventListener("DOMContentLoaded", initViz);

// 6a. Create a vairable to store the export PDF button

const exportpdfButton = document.getElementById("exportPDF");

//7a. Add event listener for when the button is clicked
exportpdfButton.addEventListener("click", exportpdfFunction);

//8a. Define a fucntion to trigger on button clicked
function exportpdfFunction() {
  viz.showExportPDFDialog();
}

// 6b. Create a vairable to store the export PP button

const exportPowerPointButton = document.getElementById("exportPP");

//7b. Add event listener for when the button is clicked
exportPowerPointButton.addEventListener("click", exportPowerPointFunction);

//8b. Define a fucntion to trigger on button clicked
function exportPowerPointFunction() {
  viz.showExportPowerPointDialog();
}

//9. Set up filter interactions
function getRangeValues() {
  const minValue = document.getElementById("minValue").value;
  const maxValue = document.getElementById("maxValue").value;
  console.log(minValue, maxValue);
}

// 10. Trigger fucntion on filter button click

const filterButton = document.getElementById("filterButton");

filterButton.addEventListener("click", getRangeValues);

function getRangeValues() {
  const minValue = document.getElementById("minValue").value;

  const maxValue = document.getElementById("maxValue").value;

  console.log(minValue, maxValue);

  const workbook = viz.getWorkbook();

  const activeSheet = workbook.getActiveSheet();

  const sheets = activeSheet.getWorksheets();

  //inspect the sheets you need to filter

  console.log(sheets);

  const sheetToFilter = sheets[0];

  // do the actual filtering

  sheetToFilter

    .applyRangeFilterAsync("SUM(Sales)", { min: minValue, max: maxValue })

    .then(alert("viz filtered"));
}
