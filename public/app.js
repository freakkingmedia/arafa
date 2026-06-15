const TEMPLATE_WIDTH = 673;
const TEMPLATE_HEIGHT = 1063;
const PDF_WIDTH_PT = (5.7 / 2.54) * 72;
const PDF_HEIGHT_PT = (9 / 2.54) * 72;
const FONT_FAMILY = "Poppins, Arial, sans-serif";
const PRINT_POINT_SCALE = 3.52;
const PERINGODE_CLASS_OPTIONS = ["LKG", "UKG", "I", "II", "III", "IV", "V", "VI", "VII"];
const PHOTO_LIMIT_MB = 2;
const PHOTO_SIZE_ROUNDING_BUFFER_BYTES = 512 * 1024;
const MAX_PHOTO_BYTES = PHOTO_LIMIT_MB * 1024 * 1024 + PHOTO_SIZE_ROUNDING_BUFFER_BYTES;
const UPLOAD_RETRY_COUNT = 3;
const PHOTO_SIZE_ERROR = `Photo must be ${PHOTO_LIMIT_MB} MB or smaller.`;
const SUBMIT_FAILURE_MESSAGE = "Failed. Please contact +91 8111985415 or snehastudiopynkulam@gmail.com and send the details manually.";

function pt(value) {
  return Math.round(value * PRINT_POINT_SCALE);
}

const templates = {
  template1: {
    name: "Arafa English School",
    image: "/assets/templates/template-1.bmp?v=20260606-arafa-icons",
    password: "arafa55",
    options: { bloodGroup: true },
    photo: { x: 155, y: 282, w: 370, h: 370, radius: 185 },
    fields: {
      studentName: { x: 55, y: 670, w: 563, size: pt(13), weight: 700, align: "center", color: "#000000", transform: "upper" },
      studentClass: { x: 154, y: 720, w: 414, size: pt(7.8), minSize: pt(6.2), weight: 500, color: "#000000", prefix: "Class : " },
      admissionNo: { x: 154, y: 754, w: 414, size: pt(7.8), minSize: pt(6.2), weight: 500, color: "#000000", prefix: "Adm. No : " },
      dob: { x: 154, y: 788, w: 230, size: pt(7.6), minSize: pt(5.8), weight: 500, color: "#000000", prefix: "DOB : " },
      bloodGroup: { x: 414, y: 788, w: 160, size: pt(7.6), minSize: pt(6.2), weight: 500, color: "#000000", prefix: "Blood : " },
      guardianName: { x: 154, y: 824, w: 414, size: pt(8.8), minSize: pt(6.2), weight: 500, color: "#000000" },
      houseName: { x: 154, y: 872, w: 414, size: pt(8.8), minSize: pt(6.2), weight: 500, color: "#000000" },
      place: { x: 154, y: 918, w: 414, size: pt(8.8), minSize: pt(6.2), weight: 500, color: "#000000" },
      phone: { x: 154, y: 972, w: 330, size: pt(8.8), minSize: pt(6.2), weight: 500, color: "#000000" }
    }
  },
  template2: {
    name: "G H S S Cheruthuruthy",
    image: "/assets/templates/template-2.bmp?v=20260513-new-psds",
    password: "cheru123",
    options: { bloodGroup: true },
    photo: { x: 160, y: 244, w: 374, h: 374, radius: 187 },
    fields: {
      studentName: { x: 38, y: 648, w: 597, size: pt(12), weight: 600, align: "center", color: "#000000", transform: "upper" },
      studentClass: { x: 76, y: 692, w: 520, size: pt(9.5), weight: 400, align: "center", color: "#000000", prefix: "Class : " },
      admissionNo: { x: 180, y: 724, w: 315, size: pt(9.5), weight: 400, align: "center", color: "#000000", prefix: "Adm. No : " },
      dob: { x: 108, y: 754, w: 292, size: pt(9.5), minSize: pt(9.5), weight: 400, color: "#000000", prefix: "DOB : " },
      bloodGroup: { x: 408, y: 754, w: 170, size: pt(9.5), weight: 400, color: "#000000", prefix: "Blood : " },
      guardianName: { x: 86, y: 839, w: 510, size: pt(9.5), weight: 400, color: "#000000" },
      houseName: { x: 86, y: 890, w: 510, size: pt(9.5), weight: 400, color: "#000000", minSize: pt(6.5) },
      place: { x: 86, y: 943, w: 510, size: pt(9.5), weight: 400, color: "#000000" },
      phone: { x: 86, y: 993, w: 510, size: pt(9.5), weight: 400, color: "#000000" }
    }
  },
  template3: {
    name: "MVM LPS Netumpura",
    image: "/assets/templates/template-3.bmp?v=20260605-netumpura-v2",
    password: "mvm22",
    options: { bloodGroup: true },
    photo: { x: 187, y: 320, w: 309, h: 312, radius: 154 },
    fields: {
      studentName: { x: 55, y: 700, w: 563, size: pt(11.5), minSize: pt(8), weight: 700, align: "center", color: "#ffffff", transform: "upper" },
      studentClass: { x: 55, y: 748, w: 563, size: pt(8), minSize: pt(6), weight: 500, align: "center", color: "#ffffff", prefix: "Class : " },
      admissionNo: { x: 55, y: 778, w: 563, size: pt(8), minSize: pt(6), weight: 500, align: "center", color: "#ffffff", prefix: "Adm. No : " },
      dob: { x: 134, y: 808, w: 245, size: pt(7.8), minSize: pt(5.8), weight: 500, color: "#ffffff", prefix: "DOB : " },
      bloodGroup: { x: 384, y: 808, w: 180, size: pt(7.8), minSize: pt(5.8), weight: 500, color: "#ffffff", prefix: "Blood : " },
      guardianName: { x: 134, y: 846, w: 430, size: pt(8.8), minSize: pt(6), weight: 500, color: "#ffffff" },
      houseName: { x: 134, y: 897, w: 430, size: pt(8.8), minSize: pt(6), weight: 500, color: "#ffffff" },
      place: { x: 134, y: 946, w: 430, size: pt(8.8), minSize: pt(6), weight: 500, color: "#ffffff" },
      phone: { x: 134, y: 994, w: 330, size: pt(8.8), minSize: pt(6), weight: 500, color: "#ffffff" }
    }
  },
  template4: {
    name: "Galaxy School",
    image: "/assets/templates/template-4.bmp?v=20260613-galaxy-new-1",
    password: "galaxy31",
    options: { bloodGroup: false },
    photo: { x: 167, y: 322, w: 320, h: 320, radius: 160 },
    fields: {
      studentName: { x: 55, y: 660, w: 563, size: pt(12), minSize: pt(8), weight: 700, align: "center", color: "#000000", transform: "upper" },
      studentClass: { x: 134, y: 712, w: 210, size: pt(8), minSize: pt(6), weight: 500, color: "#000000", prefix: "Class : " },
      admissionNo: { x: 330, y: 712, w: 250, size: pt(8), minSize: pt(6), weight: 500, color: "#000000", prefix: "Adm. No : " },
      dob: { x: 134, y: 748, w: 430, size: pt(7.8), minSize: pt(5.8), weight: 500, color: "#000000", prefix: "DOB : " },
      guardianName: { x: 134, y: 793, w: 430, size: pt(8.8), minSize: pt(6), weight: 500, color: "#000000" },
      houseName: { x: 134, y: 843, w: 430, size: pt(8.8), minSize: pt(6), weight: 500, color: "#000000" },
      place: { x: 134, y: 893, w: 430, size: pt(8.8), minSize: pt(6), weight: 500, color: "#000000" },
      phone: { x: 134, y: 942, w: 330, size: pt(8.8), minSize: pt(6), weight: 500, color: "#000000" }
    }
  },
  template5: {
    name: "ALP School Peringode",
    image: "/assets/templates/template-5.bmp?v=20260615-peringode-three-space-adm",
    password: "p24",
    options: { bloodGroup: true },
    classOptions: PERINGODE_CLASS_OPTIONS,
    photo: { x: 159, y: 280, w: 360, h: 360, radius: 180 },
    fields: {
      studentName: { x: 55, y: 674, w: 563, size: pt(13), weight: 700, align: "center", color: "#000000", transform: "upper" },
      studentClass: { x: 154, y: 728, w: 210, size: pt(7.8), minSize: pt(6.2), weight: 500, color: "#000000", prefix: "Class : " },
      admissionNo: { x: 320, y: 728, w: 248, size: pt(7.8), minSize: pt(6.2), weight: 500, color: "#000000", prefix: "Adm. No : ", inlineAfter: "studentClass", inlineGapSpaces: 3 },
      dob: { x: 154, y: 762, w: 230, size: pt(7.6), minSize: pt(5.8), weight: 500, color: "#000000", prefix: "DOB : " },
      bloodGroup: { x: 414, y: 762, w: 160, size: pt(7.6), minSize: pt(6.2), weight: 500, color: "#000000", prefix: "Blood : " },
      guardianName: { x: 154, y: 835, w: 414, size: pt(8.8), minSize: pt(6.2), weight: 500, color: "#000000" },
      houseName: { x: 154, y: 878, w: 414, size: pt(8.8), minSize: pt(6.2), weight: 500, color: "#000000" },
      place: { x: 154, y: 920, w: 414, size: pt(8.8), minSize: pt(6.2), weight: 500, color: "#000000" },
      phone: { x: 154, y: 969, w: 330, size: pt(8.8), minSize: pt(6.2), weight: 500, color: "#000000" }
    }
  },
  template6: {
    name: "GHSS Panjal",
    image: "/assets/templates/template-6.bmp?v=20260615-panjal-photo-fill",
    password: "p25",
    options: { bloodGroup: true },
    photo: { x: 164, y: 270, w: 358, h: 358, radius: 179 },
    fields: {
      studentName: { x: 55, y: 638, w: 563, size: pt(13), weight: 700, align: "center", color: "#000000", transform: "upper" },
      studentClass: { x: 154, y: 690, w: 414, size: pt(7.8), minSize: pt(6.2), weight: 500, color: "#000000", prefix: "Class : " },
      admissionNo: { x: 154, y: 724, w: 414, size: pt(7.8), minSize: pt(6.2), weight: 500, color: "#000000", prefix: "Adm. No : " },
      dob: { x: 154, y: 758, w: 230, size: pt(7.6), minSize: pt(5.8), weight: 500, color: "#000000", prefix: "DOB : " },
      bloodGroup: { x: 414, y: 758, w: 160, size: pt(7.6), minSize: pt(6.2), weight: 500, color: "#000000", prefix: "Blood : " },
      guardianName: { x: 154, y: 822, w: 414, size: pt(8.8), minSize: pt(6.2), weight: 500, color: "#000000" },
      houseName: { x: 154, y: 870, w: 414, size: pt(8.8), minSize: pt(6.2), weight: 500, color: "#000000" },
      place: { x: 154, y: 917, w: 414, size: pt(8.8), minSize: pt(6.2), weight: 500, color: "#000000" },
      phone: { x: 154, y: 965, w: 330, size: pt(8.8), minSize: pt(6.2), weight: 500, color: "#000000" }
    }
  }
};

const schoolOptions = Object.entries(templates).map(([key, template]) => ({
  key,
  name: template.name,
  search: template.name.toLowerCase()
}));

const state = {
  templateKey: "template1",
  cardId: makeCardId(),
  unlockedSchools: new Set(),
  croppedPhoto: "",
  cropImage: null,
  submitting: false,
  crop: { zoom: 1, offsetX: 0, offsetY: 0, dragging: false, startX: 0, startY: 0 }
};

const form = document.getElementById("studentForm");
const message = document.getElementById("message");
const cardPreview = document.getElementById("cardPreview");
const templateBg = document.getElementById("templateBg");
const photoLayer = document.getElementById("photoLayer");
const editableLayer = document.getElementById("editableLayer");
const renderedCardCanvas = document.getElementById("renderedCardCanvas");
const renderedCardCtx = renderedCardCanvas.getContext("2d");
const schoolSearch = document.getElementById("schoolSearch");
const schoolResults = document.getElementById("schoolResults");
const passwordDialog = document.getElementById("passwordDialog");
const passwordSchoolName = document.getElementById("passwordSchoolName");
const schoolPassword = document.getElementById("schoolPassword");
const unlockSchoolBtn = document.getElementById("unlockSchoolBtn");
const cancelPasswordBtn = document.getElementById("cancelPasswordBtn");
const cropDialog = document.getElementById("cropDialog");
const cropCanvas = document.getElementById("cropCanvas");
const cropCtx = cropCanvas.getContext("2d");
const zoomRange = document.getElementById("zoomRange");
const photoInput = document.getElementById("photoInput");
const submitBtn = document.getElementById("submitBtn");

const inputs = {
  templateKey: document.getElementById("templateKey"),
  schoolSearch,
  studentName: document.getElementById("studentName"),
  admissionNo: document.getElementById("admissionNo"),
  studentClass: document.getElementById("studentClass"),
  division: document.getElementById("division"),
  bloodGroup: document.getElementById("bloodGroup"),
  dobDay: document.getElementById("dobDay"),
  dobMonth: document.getElementById("dobMonth"),
  dobYear: document.getElementById("dobYear"),
  guardianName: document.getElementById("guardianName"),
  houseName: document.getElementById("houseName"),
  place: document.getElementById("place"),
  phone: document.getElementById("phone")
};

const defaultStudentClassOptions = Array.from(inputs.studentClass.options).map(option => ({
  value: option.value,
  text: option.textContent
}));

function makeCardId() {
  return `ID-${Math.floor(1000 + Math.random() * 9000)}`;
}

function titleCase(value) {
  return value.toLowerCase().replace(/\b[a-z]/g, char => char.toUpperCase());
}

function cleanNameValue(value) {
  return value.replace(/[^a-z\s.'-]/gi, "").replace(/\s{2,}/g, " ");
}

function makeTwoDigit(value) {
  return String(value).padStart(2, "0");
}

function getDobValue() {
  const day = inputs.dobDay.value;
  const month = inputs.dobMonth.value;
  const year = inputs.dobYear.value;
  if (!day || !month || !year) return "";
  return `${year}-${makeTwoDigit(month)}-${makeTwoDigit(day)}`;
}

function getFormData() {
  const phoneDigits = inputs.phone.value.replace(/\D/g, "").slice(0, 10);
  return {
    studentName: titleCase(inputs.studentName.value),
    admissionNo: inputs.admissionNo.value.trim().replace(/[^a-z0-9/-]/gi, "").toUpperCase(),
    studentClass: inputs.studentClass.value,
    division: inputs.division.value,
    bloodGroup: inputs.bloodGroup.value.trim(),
    dob: getDobValue(),
    guardianName: titleCase(inputs.guardianName.value),
    houseName: titleCase(inputs.houseName.value),
    place: titleCase(inputs.place.value),
    phone: phoneDigits ? `+91 ${phoneDigits}` : "",
    rawPhone: phoneDigits,
    cardId: state.cardId
  };
}

function displayDob(value) {
  if (!value) return "";
  const [year, month, day] = value.split("-");
  return `${day}-${month}-${year}`;
}

function fieldValue(key, data) {
  if (key === "dob") return displayDob(data.dob);
  if (key === "studentClass") return [data.studentClass, data.division].filter(Boolean).join(" ");
  return data[key] || "";
}

function applyTemplate() {
  const template = templates[state.templateKey];
  const scale = getPreviewScale();
  renderEditableHtml(template);
  applyTemplateOptions(template);
  applyClassOptions(template);
  applySchoolLock();
  templateBg.src = template.image;
  const scalePhoto = template.photo;
  photoLayer.style.left = percent(scalePhoto.x, TEMPLATE_WIDTH);
  photoLayer.style.top = percent(scalePhoto.y, TEMPLATE_HEIGHT);
  photoLayer.style.width = percent(scalePhoto.w, TEMPLATE_WIDTH);
  photoLayer.style.height = percent(scalePhoto.h, TEMPLATE_HEIGHT);
  photoLayer.style.borderRadius = scalePhoto.radius ? "50%" : "0";
  photoLayer.style.display = state.croppedPhoto ? "block" : "none";
  photoLayer.src = state.croppedPhoto;

  for (const [key, config] of Object.entries(template.fields)) {
    const node = editableLayer.querySelector(`[data-field="${key}"]`);
    if (!node) continue;
    node.style.left = percent(config.x, TEMPLATE_WIDTH);
    node.style.top = percent(config.y, TEMPLATE_HEIGHT);
    node.style.width = percent(config.w, TEMPLATE_WIDTH);
    node.style.height = `${Math.ceil((config.coverHeight || config.size * (config.lines || 1) * (config.lineHeight || 1.35)) * scale)}px`;
    node.style.fontSize = `${Math.max(8, config.size * scale)}px`;
    node.style.lineHeight = config.lineHeight || 1.08;
    node.style.color = config.color;
    node.style.fontWeight = config.weight || 700;
    node.style.background = "transparent";
    node.style.whiteSpace = config.lines && config.lines > 1 ? "normal" : "nowrap";
    node.style.overflowWrap = config.lines && config.lines > 1 ? "break-word" : "normal";
    node.style.transform = config.rotate ? `rotate(${config.rotate}deg)` : "";
    node.style.transformOrigin = "left top";
    node.style.textAlign = config.align || "left";
  }
  renderPreview();
}

function applyTemplateOptions(template) {
  document.querySelectorAll("[data-template-option]").forEach(node => {
    const option = node.dataset.templateOption;
    node.classList.toggle("is-hidden", template.options && template.options[option] === false);
  });
}

function applyClassOptions(template) {
  const currentValue = inputs.studentClass.value;
  const classOptions = template.classOptions
    ? [{ value: "", text: "Select" }, ...template.classOptions.map(value => ({ value, text: value }))]
    : defaultStudentClassOptions;
  const currentOptions = Array.from(inputs.studentClass.options).map(option => option.value).join("|");
  const nextOptions = classOptions.map(option => option.value).join("|");

  if (currentOptions !== nextOptions) {
    inputs.studentClass.innerHTML = classOptions
      .map(option => `<option value="${option.value}">${option.text}</option>`)
      .join("");
  }

  inputs.studentClass.value = classOptions.some(option => option.value === currentValue) ? currentValue : "";
}

function renderEditableHtml(template) {
  const html = Object.keys(template.fields)
    .map(key => `<span class="card-text card-field-${key}" data-field="${key}"></span>`)
    .join("");

  if (editableLayer.dataset.templateKey !== state.templateKey || editableLayer.innerHTML !== html) {
    editableLayer.dataset.templateKey = state.templateKey;
    editableLayer.innerHTML = html;
  }
}

function percent(value, total) {
  return `${(value / total) * 100}%`;
}

function getPreviewScale() {
  return (cardPreview.clientWidth || TEMPLATE_WIDTH) / TEMPLATE_WIDTH;
}

function renderPreview() {
  const data = getFormData();
  inputs.studentName.value = data.studentName;
  inputs.guardianName.value = data.guardianName;
  inputs.houseName.value = data.houseName;
  inputs.place.value = data.place;
  inputs.phone.value = data.rawPhone;
  inputs.admissionNo.value = data.admissionNo;

  const template = templates[state.templateKey];
  const scale = getPreviewScale();
  for (const [key, config] of Object.entries(template.fields)) {
    const node = editableLayer.querySelector(`[data-field="${key}"]`);
    if (!node) continue;
    const value = fieldValue(key, getFormData());
    node.textContent = formatTemplateText(value, config);
    fitPreviewText(node, config, scale);
  }
  applyInlinePreviewPositions(template, scale);
  scheduleCanvasPreviewRender();
}

function fitPreviewText(node, config, scale) {
  let size = Math.max(8, config.size * scale);
  const minSize = Math.max(8, (config.minSize || 8) * scale);
  node.style.fontSize = `${size}px`;
  while ((node.scrollWidth > node.clientWidth || node.scrollHeight > node.clientHeight) && size > minSize) {
    size -= 0.5;
    node.style.fontSize = `${size}px`;
  }
}

function applyInlinePreviewPositions(template, scale) {
  for (const [key, config] of Object.entries(template.fields)) {
    if (!config.inlineAfter) continue;
    const node = editableLayer.querySelector(`[data-field="${key}"]`);
    const anchor = editableLayer.querySelector(`[data-field="${config.inlineAfter}"]`);
    if (!node || !anchor) continue;
    const anchorConfig = template.fields[config.inlineAfter];
    const anchorWidth = measurePreviewText(anchor);
    const spaceWidth = measurePreviewSpace(anchor, config.inlineGapSpaces || 1);
    const nextX = anchorConfig.x + (anchorWidth + spaceWidth) / scale;
    node.style.left = percent(nextX, TEMPLATE_WIDTH);
    node.style.width = percent(Math.max(80, config.x + config.w - nextX), TEMPLATE_WIDTH);
  }
}

function measurePreviewText(node) {
  if (!node.textContent) return 0;
  const range = document.createRange();
  range.selectNodeContents(node);
  const width = range.getBoundingClientRect().width;
  range.detach();
  return width;
}

function measurePreviewSpace(node, count = 1) {
  const style = getComputedStyle(node);
  const canvas = measurePreviewSpace.canvas || (measurePreviewSpace.canvas = document.createElement("canvas"));
  const ctx = canvas.getContext("2d");
  ctx.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
  return ctx.measureText(" ".repeat(count)).width;
}

let previewRenderToken = 0;

function scheduleCanvasPreviewRender() {
  const token = ++previewRenderToken;
  requestAnimationFrame(async () => {
    try {
      const canvas = await renderCardCanvas({ syncPreview: false });
      if (token !== previewRenderToken) return;
      renderedCardCtx.clearRect(0, 0, renderedCardCanvas.width, renderedCardCanvas.height);
      renderedCardCtx.drawImage(canvas, 0, 0);
    } catch (error) {
      console.warn("Preview render failed", error);
    }
  });
}

function formatTemplateText(value, config) {
  if (!value) return "";
  let text = String(value);
  if (config.transform === "upper") text = text.toUpperCase();
  return `${config.prefix || ""}${text}${config.suffix || ""}`;
}

function showMessage(text, ok = false) {
  message.textContent = text;
  message.classList.toggle("ok", ok);
}

function showSubmitError(error) {
  const detail = error && error.message ? ` (${error.message})` : "";
  showMessage(`${SUBMIT_FAILURE_MESSAGE}${detail}`);
}

function setSubmitSending(isSending) {
  state.submitting = isSending;
  submitBtn.disabled = isSending || !isSchoolUnlocked();
  submitBtn.textContent = isSending ? "Uploading..." : "Submit";
}

function validateCardDetails() {
  const template = templates[state.templateKey];
  if (!isSchoolUnlocked()) return "Enter the school password to unlock this template.";

  const data = getFormData();
  const required = [
    ["studentName", "Student name"],
    ["admissionNo", "Admission no."],
    ["studentClass", "Class"],
    ["division", "Division"],
    ["dob", "Date of birth"],
    ["guardianName", "Guardian name"],
    ["houseName", "House name"],
    ["place", "Place"],
    ["phone", "Phone"]
  ];

  for (const [key, label] of required) {
    if (!String(data[key]).trim()) return `${label} is required.`;
  }
  if (!/^\d{10}$/.test(data.rawPhone)) return "Phone must be 10 digits after +91.";
  if (template.options && template.options.bloodGroup && !data.bloodGroup) return "Blood group is required.";
  if (!state.croppedPhoto) return "Photo is required.";
  return "";
}

function isSchoolUnlocked() {
  return state.unlockedSchools.has(state.templateKey);
}

function applySchoolLock() {
  const unlocked = isSchoolUnlocked();
  form.querySelectorAll("input, select, button").forEach(control => {
    if (
      control === inputs.templateKey ||
      control === schoolSearch ||
      control === schoolPassword ||
      control === unlockSchoolBtn ||
      control === cancelPasswordBtn ||
      control.classList.contains("school-result")
    ) {
      return;
    }
    control.disabled = !unlocked || (control === submitBtn && state.submitting);
  });
  submitBtn.textContent = state.submitting ? "Uploading..." : "Submit";
}

function renderSchoolSearchResults() {
  const query = schoolSearch.value.trim().toLowerCase();
  const matches = schoolOptions
    .filter(option => !query || option.search.includes(query))
    .slice(0, 12);

  if (!matches.length) {
    schoolResults.innerHTML = `<div class="school-empty">No matching schools</div>`;
  } else {
    schoolResults.innerHTML = matches
      .map(option => `<button type="button" class="school-result" role="option" data-template-key="${option.key}">${option.name}</button>`)
      .join("");
  }

  const isOpen = document.activeElement === schoolSearch || Boolean(query);
  schoolResults.classList.toggle("is-open", isOpen);
  schoolSearch.setAttribute("aria-expanded", String(isOpen));
}

function closeSchoolResults() {
  schoolResults.classList.remove("is-open");
  schoolSearch.setAttribute("aria-expanded", "false");
}

function selectSchool(templateKey) {
  if (!templates[templateKey]) return;
  state.templateKey = templateKey;
  inputs.templateKey.value = templateKey;
  schoolSearch.value = templates[templateKey].name;
  schoolPassword.value = "";
  closeSchoolResults();
  showMessage("");
  applyTemplate();

  if (isSchoolUnlocked()) {
    return;
  }

  passwordSchoolName.textContent = templates[templateKey].name;
  passwordDialog.showModal();
  schoolPassword.focus();
}

function unlockSelectedSchool() {
  const template = templates[state.templateKey];
  if (schoolPassword.value.trim() !== template.password) {
    showMessage("Wrong school password.");
    schoolPassword.focus();
    return;
  }
  state.unlockedSchools.add(state.templateKey);
  schoolPassword.value = "";
  showMessage("School template unlocked.", true);
  passwordDialog.close();
  applySchoolLock();
}

function openCropper(file) {
  if (file.size > MAX_PHOTO_BYTES) {
    showMessage(PHOTO_SIZE_ERROR);
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const image = new Image();
    image.onload = () => {
      state.cropImage = image;
      state.crop.zoom = Math.max(cropCanvas.width / image.width, cropCanvas.height / image.height);
      state.crop.offsetX = 0;
      state.crop.offsetY = 0;
      zoomRange.value = "1";
      cropDialog.showModal();
      drawCrop();
    };
    image.src = reader.result;
  };
  reader.readAsDataURL(file);
}

function drawCrop() {
  const image = state.cropImage;
  if (!image) return;
  cropCtx.clearRect(0, 0, cropCanvas.width, cropCanvas.height);
  cropCtx.fillStyle = "#111827";
  cropCtx.fillRect(0, 0, cropCanvas.width, cropCanvas.height);
  const baseScale = Math.max(cropCanvas.width / image.width, cropCanvas.height / image.height);
  const scale = baseScale * Number(zoomRange.value);
  const width = image.width * scale;
  const height = image.height * scale;
  const x = (cropCanvas.width - width) / 2 + state.crop.offsetX;
  const y = (cropCanvas.height - height) / 2 + state.crop.offsetY;
  cropCtx.drawImage(image, x, y, width, height);
  drawCropGuide();
}

function drawCropGuide() {
  cropCtx.save();
  cropCtx.strokeStyle = "rgba(255, 255, 255, 0.95)";
  cropCtx.lineWidth = 3;
  cropCtx.setLineDash([9, 7]);

  const radius = Math.min(cropCanvas.width, cropCanvas.height) * 0.44;
  const centerX = cropCanvas.width / 2;
  const centerY = cropCanvas.height / 2;

  cropCtx.fillStyle = "rgba(0, 0, 0, 0.34)";
  cropCtx.beginPath();
  cropCtx.rect(0, 0, cropCanvas.width, cropCanvas.height);
  cropCtx.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
  cropCtx.fill("evenodd");

  cropCtx.beginPath();
  cropCtx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  cropCtx.stroke();

  cropCtx.restore();
}

function applyCrop() {
  const image = state.cropImage;
  if (!image) return;
  const output = document.createElement("canvas");
  output.width = 800;
  output.height = 800;
  const ctx = output.getContext("2d");
  const baseScale = Math.max(cropCanvas.width / image.width, cropCanvas.height / image.height);
  const scale = baseScale * Number(zoomRange.value);
  const width = image.width * scale;
  const height = image.height * scale;
  const x = (cropCanvas.width - width) / 2 + state.crop.offsetX;
  const y = (cropCanvas.height - height) / 2 + state.crop.offsetY;

  const sourceRadius = Math.min(cropCanvas.width, cropCanvas.height) * 0.44;
  const cropLeft = cropCanvas.width / 2 - sourceRadius;
  const cropTop = cropCanvas.height / 2 - sourceRadius;
  const factor = output.width / (sourceRadius * 2);
  ctx.save();
  ctx.beginPath();
  ctx.arc(output.width / 2, output.height / 2, output.width / 2, 0, Math.PI * 2);
  ctx.clip();
  ctx.drawImage(
    image,
    (x - cropLeft) * factor,
    (y - cropTop) * factor,
    width * factor,
    height * factor
  );
  ctx.restore();
  state.croppedPhoto = output.toDataURL("image/png");
  photoLayer.src = state.croppedPhoto;
  photoLayer.style.display = "block";
  document.getElementById("photoStatus").textContent = "Selected";
  cropDialog.close();
  renderPreview();
}

async function renderCardCanvas(options = {}) {
  if (options.syncPreview !== false) {
    renderPreview();
  }
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready;
  }
  const canvas = document.createElement("canvas");
  canvas.width = TEMPLATE_WIDTH;
  canvas.height = TEMPLATE_HEIGHT;
  const ctx = canvas.getContext("2d");
  const template = templates[state.templateKey];
  const bg = await loadImage(template.image);
  ctx.drawImage(bg, 0, 0, TEMPLATE_WIDTH, TEMPLATE_HEIGHT);

  if (state.croppedPhoto) {
    const photo = await loadImage(state.croppedPhoto, "selected photo");
    const p = template.photo;
    ctx.save();
    if (p.radius) {
      ctx.beginPath();
      ctx.arc(p.x + p.w / 2, p.y + p.h / 2, Math.min(p.w, p.h) / 2, 0, Math.PI * 2);
      ctx.clip();
    }
    ctx.drawImage(photo, p.x, p.y, p.w, p.h);
    ctx.restore();
  }

  const data = getFormData();
  const drawnFields = {};
  for (const [key, config] of Object.entries(template.fields)) {
    const raw = fieldValue(key, data);
    const text = formatTemplateText(raw, config);
    const drawConfig = { ...config };
    if (config.inlineAfter && drawnFields[config.inlineAfter]) {
      const anchor = drawnFields[config.inlineAfter];
      ctx.font = `${config.weight || 700} ${config.size}px ${FONT_FAMILY}`;
      drawConfig.x = anchor.x + anchor.width + ctx.measureText(" ".repeat(config.inlineGapSpaces || 1)).width;
      drawConfig.w = Math.max(80, config.x + config.w - drawConfig.x);
    }
    drawnFields[key] = drawFittedText(ctx, text, drawConfig) || {
      x: drawConfig.x,
      y: drawConfig.y,
      width: 0,
      size: drawConfig.size
    };
  }

  return canvas;
}

function drawFittedText(ctx, text, config) {
  if (!text) return;
  let size = config.size;
  const minSize = config.minSize || 12;
  const cover = config.cover === false ? "" : config.cover || templates[state.templateKey].cover || "";
  if (cover) {
    ctx.fillStyle = cover;
    ctx.fillRect(config.x - 4, config.y - 3, config.w + 8, config.coverHeight || size * 1.35);
  }
  ctx.fillStyle = config.color;
  ctx.textBaseline = "top";
  ctx.font = `${config.weight || 700} ${size}px ${FONT_FAMILY}`;
  while (ctx.measureText(text).width > config.w && size > minSize) {
    size -= 0.5;
    ctx.font = `${config.weight || 700} ${size}px ${FONT_FAMILY}`;
  }
  let x = config.x;
  if (config.align === "center") {
    x = config.x + (config.w - ctx.measureText(text).width) / 2;
  } else if (config.align === "right") {
    x = config.x + config.w - ctx.measureText(text).width;
  }
  if (config.rotate) {
    ctx.save();
    ctx.translate(config.x, config.y);
    ctx.rotate((config.rotate * Math.PI) / 180);
    const rotatedX = config.align === "center" ? (config.w - ctx.measureText(text).width) / 2 : 0;
    ctx.fillText(text, rotatedX, 0);
    ctx.restore();
    return { x, y: config.y, width: ctx.measureText(text).width, size };
  }
  if (config.lines && config.lines > 1) {
    drawWrappedText(ctx, text, config, size);
    return { x: config.x, y: config.y, width: config.w, size };
  }
  ctx.fillText(text, x, config.y);
  return { x, y: config.y, width: ctx.measureText(text).width, size };
}

function drawWrappedText(ctx, text, config, size) {
  const fittedSize = fitWrappedCanvasText(ctx, text, config, size);
  if (fittedSize !== size) {
    size = fittedSize;
    ctx.font = `${config.weight || 700} ${size}px ${FONT_FAMILY}`;
  }
  const words = text.split(/\s+/).filter(Boolean);
  const lines = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (ctx.measureText(next).width <= config.w || !current) {
      current = next;
    } else {
      lines.push(current);
      current = word;
      if (lines.length === config.lines - 1) break;
    }
  }

  const usedWords = lines.join(" ").split(/\s+/).filter(Boolean).length;
  const remaining = words.slice(usedWords).join(" ");
  if (remaining || current) lines.push(remaining || current);

  const lineHeight = size * (config.lineHeight || 1.14);
  lines.slice(0, config.lines).forEach((line, index) => {
    let output = line;
    while (ctx.measureText(output).width > config.w && output.length > 1) {
      output = output.slice(0, -2).trimEnd();
    }
    if (index === config.lines - 1 && output !== line) output = `${output}...`;
    ctx.fillText(output, config.x, config.y + index * lineHeight);
  });
}

function fitWrappedCanvasText(ctx, text, config, size) {
  const minSize = config.minSize || 12;
  let fittedSize = size;
  while (fittedSize > minSize && wrappedLineCount(ctx, text, config.w, config.lines) > config.lines) {
    fittedSize -= 1;
    ctx.font = `${config.weight || 700} ${fittedSize}px ${FONT_FAMILY}`;
  }
  return fittedSize;
}

function wrappedLineCount(ctx, text, width, maxLines) {
  const words = text.split(/\s+/).filter(Boolean);
  let count = 1;
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (ctx.measureText(next).width <= width || !current) {
      current = next;
    } else {
      count += 1;
      current = word;
      if (count > maxLines) return count;
    }
  }
  return words.length ? count : 0;
}

function loadImage(src, label = "template image") {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = async () => {
      try {
        if (image.decode) await image.decode();
      } catch (error) {
        // Some browsers reject decode() for already-loaded data URLs. onload is enough here.
      }
      resolve(image);
    };
    image.onerror = () => reject(new Error(`Could not load ${label}.`));
    image.src = src;
  });
}

async function createPdfBase64() {
  const canvas = await renderCardCanvas();
  const jpegBase64 = canvas.toDataURL("image/jpeg", 0.95).split(",")[1];
  const pdfBytes = buildImagePdf(jpegBase64, TEMPLATE_WIDTH, TEMPLATE_HEIGHT);
  return bytesToBase64(pdfBytes);
}

function buildImagePdf(jpegBase64, width, height) {
  const jpegBytes = base64ToBytes(jpegBase64);
  const pageWidth = PDF_WIDTH_PT;
  const pageHeight = PDF_HEIGHT_PT;
  const objects = [];
  objects.push("<< /Type /Catalog /Pages 2 0 R >>");
  objects.push("<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
  objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${formatPdfNumber(pageWidth)} ${formatPdfNumber(pageHeight)}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>`);
  objects.push({ stream: jpegBytes, dict: `<< /Type /XObject /Subtype /Image /Width ${width} /Height ${height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpegBytes.length} >>` });
  const content = asciiBytes(`q\n${formatPdfNumber(pageWidth)} 0 0 ${formatPdfNumber(pageHeight)} 0 0 cm\n/Im0 Do\nQ\n`);
  objects.push({ stream: content, dict: `<< /Length ${content.length} >>` });

  const chunks = [asciiBytes("%PDF-1.4\n")];
  const offsets = [0];
  for (let i = 0; i < objects.length; i += 1) {
    offsets.push(totalLength(chunks));
    chunks.push(asciiBytes(`${i + 1} 0 obj\n`));
    if (typeof objects[i] === "string") {
      chunks.push(asciiBytes(`${objects[i]}\nendobj\n`));
    } else {
      chunks.push(asciiBytes(`${objects[i].dict}\nstream\n`));
      chunks.push(objects[i].stream);
      chunks.push(asciiBytes("\nendstream\nendobj\n"));
    }
  }
  const xrefOffset = totalLength(chunks);
  chunks.push(asciiBytes(`xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`));
  for (let i = 1; i < offsets.length; i += 1) {
    chunks.push(asciiBytes(`${String(offsets[i]).padStart(10, "0")} 00000 n \n`));
  }
  chunks.push(asciiBytes(`trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`));
  return concatBytes(chunks);
}

function asciiBytes(text) {
  return new TextEncoder().encode(text);
}

function formatPdfNumber(value) {
  return Number(value.toFixed(4)).toString();
}

function totalLength(chunks) {
  return chunks.reduce((sum, chunk) => sum + chunk.length, 0);
}

function concatBytes(chunks) {
  const output = new Uint8Array(totalLength(chunks));
  let offset = 0;
  for (const chunk of chunks) {
    output.set(chunk, offset);
    offset += chunk.length;
  }
  return output;
}

function base64ToBytes(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function bytesToBase64(bytes) {
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

function makePdfFileName() {
  const data = getFormData();
  const schoolName = templates[state.templateKey].name;
  const classDivision = [data.studentClass, data.division].filter(Boolean).join("-");
  const parts = [schoolName, data.studentName, classDivision].filter(Boolean);
  return parts.join("-").replace(/[^a-z0-9_-]+/gi, "-").replace(/^-+|-+$/g, "") || "student-id-card";
}

async function submitPdfUpload() {
  if (state.submitting) return;
  try {
    const validationError = validateCardDetails();
    if (validationError) {
      showMessage(validationError);
      return;
    }

    setSubmitSending(true);
    showMessage("Generating PDF...", true);
    const data = getFormData();
    const pdfBase64 = await createPdfBase64();

    showMessage("Uploading...", true);
    const fileName = `${makePdfFileName()}.pdf`;
    const response = await fetch("/api/create-pdf-upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentName: data.studentName,
        schoolName: templates[state.templateKey].name,
        classDivision: [data.studentClass, data.division].filter(Boolean).join(" "),
        fileName
      })
    });
    const responseText = await response.text();
    const result = parseJsonText(responseText);
    if (!response.ok) {
      const detail = result.detail ? ` ${String(result.detail).slice(0, 240)}` : "";
      throw new Error(`${result.error || responseText || "Upload setup failed."}${detail}`);
    }

    await uploadPdfToSignedUrl(result.signedUrl, pdfBase64, fileName);

    showMessage("Submitted successfully. PDF uploaded.", true);
  } catch (error) {
    showSubmitError(error);
  } finally {
    if (state.submitting) setSubmitSending(false);
  }
}

async function uploadPdfToSignedUrl(signedUrl, pdfBase64, fileName) {
  if (!signedUrl) {
    throw new Error("Upload URL is missing.");
  }

  const pdfBlob = base64ToBlob(pdfBase64, "application/pdf");
  let lastError = null;

  for (let attempt = 1; attempt <= UPLOAD_RETRY_COUNT; attempt += 1) {
    try {
      await uploadPdfAttempt(signedUrl, pdfBlob, fileName);
      return;
    } catch (error) {
      lastError = error;
      if (attempt < UPLOAD_RETRY_COUNT) {
        await delay(700 * attempt);
      }
    }
  }

  throw lastError || new Error("PDF upload failed.");
}

async function uploadPdfAttempt(signedUrl, pdfBlob, fileName) {
  const formData = new FormData();
  formData.append("cacheControl", "3600");
  formData.append("", pdfBlob, fileName);

  let response;
  try {
    response = await fetch(signedUrl, {
      method: "PUT",
      body: formData
    });
  } catch (error) {
    throw new Error(`Direct Supabase upload failed after retries. Check Storage CORS/settings for this domain. ${error.message}`);
  }

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(detail || `Supabase upload failed (${response.status}).`);
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function base64ToBlob(base64, contentType) {
  const bytes = base64ToBytes(base64);
  return new Blob([bytes], { type: contentType });
}

function parseJsonText(text) {
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return {};
  }
}

function populateDobSelects() {
  appendNumberOptions(inputs.dobDay, 1, 31, makeTwoDigit);
  appendNumberOptions(inputs.dobMonth, 1, 12, makeTwoDigit);
  appendNumberOptions(inputs.dobYear, 2000, 2026, value => String(value));
}

function appendNumberOptions(select, start, end, formatLabel) {
  for (let value = start; value <= end; value += 1) {
    const option = document.createElement("option");
    option.value = String(value);
    option.textContent = formatLabel(value);
    select.appendChild(option);
  }
}

populateDobSelects();

for (const input of Object.values(inputs).filter(input => input !== inputs.templateKey && input !== inputs.schoolSearch)) {
  const updateFromInput = () => {
    if (input === inputs.studentName || input === inputs.guardianName) {
      input.value = cleanNameValue(input.value);
    }
    applyTemplate();
  };
  input.addEventListener("input", updateFromInput);
  input.addEventListener("change", updateFromInput);
}

schoolSearch.value = templates[state.templateKey].name;
schoolSearch.addEventListener("input", renderSchoolSearchResults);
schoolSearch.addEventListener("focus", renderSchoolSearchResults);
schoolSearch.addEventListener("keydown", event => {
  if (event.key === "Escape") closeSchoolResults();
});
schoolResults.addEventListener("click", event => {
  const button = event.target.closest("[data-template-key]");
  if (!button) return;
  selectSchool(button.dataset.templateKey);
});
document.addEventListener("click", event => {
  if (event.target === schoolSearch || schoolResults.contains(event.target)) return;
  closeSchoolResults();
});

photoInput.addEventListener("change", event => {
  const file = event.target.files[0];
  if (file && file.size > MAX_PHOTO_BYTES) {
    showMessage(PHOTO_SIZE_ERROR);
    event.target.value = "";
    return;
  }
  if (file) openCropper(file);
});

document.getElementById("applyCropBtn").addEventListener("click", applyCrop);
document.getElementById("cancelCropBtn").addEventListener("click", () => cropDialog.close());
submitBtn.addEventListener("click", submitPdfUpload);
unlockSchoolBtn.addEventListener("click", unlockSelectedSchool);
cancelPasswordBtn.addEventListener("click", () => {
  schoolPassword.value = "";
  passwordDialog.close();
});
schoolPassword.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    event.preventDefault();
    unlockSelectedSchool();
  }
});
zoomRange.addEventListener("input", drawCrop);
window.addEventListener("resize", applyTemplate);

cropCanvas.addEventListener("pointerdown", event => {
  state.crop.dragging = true;
  state.crop.startX = event.clientX - state.crop.offsetX;
  state.crop.startY = event.clientY - state.crop.offsetY;
  cropCanvas.setPointerCapture(event.pointerId);
});

cropCanvas.addEventListener("pointermove", event => {
  if (!state.crop.dragging) return;
  state.crop.offsetX = event.clientX - state.crop.startX;
  state.crop.offsetY = event.clientY - state.crop.startY;
  drawCrop();
});

cropCanvas.addEventListener("pointerup", () => {
  state.crop.dragging = false;
});

applyTemplate();
