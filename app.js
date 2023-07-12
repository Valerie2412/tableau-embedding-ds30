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
  const viz = new tableau.Viz(vizContainer, url, options);
}

//5. Execute fucntion to actually load the dashboard
document, addEventListener9("DOMContentLoaded");
initViz();
