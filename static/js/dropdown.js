const test_sponsor = document.getElementById('test_sponsor');
const test_program = document.getElementById('test_program');
const test_test = document.getElementById('test_test');
const third_dropdown = document.getElementById('third-dropdown');
const checkbox_value = document.getElementById("checkbox-value");
const radiobtn_value = document.getElementById("radiobtn-value");
const multioption_div = document.getElementById("multioption-div");

const national_inspection_testing_and_certification_corporation_section1 = '<div class="section1"> <div class="chunk"> <div class="chunk-div"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="NBOPE Journeyman Plumber 2018 (Closed)--1"> <div class="chunk-div1"> <label><b>NBOPE Journeyman Plumber 2018 (Closed) </b></label><br> <div class="testing-window"><label>Testing Window: 20 OCT 2021 to 31 DEC <br> 9999 </label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="NBOPE Journeyman Plumber 2018 (Open)--1"> <div class="chunk-div2-2"> <label><b>NBOPE Journeyman Plumber 2018 (Open)</b></label><br> <div class="testing-window"><label>Testing Window: 20 OCT 2021 to 31 DEC <br> 9999 </label></div> </div> </div> <div class="chunk-bottom-border"></div> </div> </div>';

const national_inspection_testing_and_certification_corporation_section2 = '<div class="section2"> <div class="chunk"> <div class="chunk-div"> <input type="checkbox" value="NBOPE Master Plumber 2018 (Closed)--2" id="select_option_checkbox" onclick="select_checkbox(this)"> <div class="chunk-div1"> <label><b>NBOPE Master Plumber 2018 (Closed)</b></label><br> <div class="testing-window"><label>Testing Window: 20 OCT 2021 to 31 DEC <br> 9999 </label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" value="NBOPE Master Plumber 2018 (Open)--2" id="select_option_checkbox" onclick="select_checkbox(this)"> <div class="chunk-div2-2"> <label><b>NBOPE Master Plumber 2018 (Open)</b></label><br> <div class="testing-window"><label>Testing Window: 20 OCT 2021 to 31 DEC <br> 9999 </label></div> </div> </div> <div class="chunk-bottom-border"></div> </div> </div>';

const national_inspection_testing_and_certification_corporation_section3 = '<div class="section3"> <div class="chunk"> <div class="chunk-div"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio"  value="Journey Level Air Conditioning and Refrigeration"> <div class="chunk-div1"> <label><b>Journey Level Air Conditioning and Refrigeration</b></label><br> <div class="testing-window"><label >Testing Window: 11 OCT 2021 to 31 DEC <br> 9999  </label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio"  value="Journey Level Plumber 2018"> <div class="chunk-div2-2"> <label><b>Journey Level Plumber 2018</b></label><br> <div class="testing-window"><label>Testing Window: 11 OCT 2021 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio"  value="Journey Level Plumber 2021 "> <div class="chunk-div2-2"> <label><b>Journey Level Plumber 2021 </b></label><br> <div class="testing-window"><label>Testing Window: 15 APR 2022 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio"  value="Journey Level Steamfitter/Pipefitter"> <div class="chunk-div2-2"> <label><b>Journey Level Steamfitter/Pipefitter</b></label><br> <div class="testing-window"><label >Testing Window: 11 OCT 2021 to 31 DEC <br> 9999 </label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio"  value="Medical Gas Generalist 2018"> <div class="chunk-div2-2"> <label><b>Medical Gas Generalist 2018</b></label><br> <div class="testing-window"><label>Testing Window: 18 AUG 2021 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio" value="Medical Gas Generalist 2018"> <div class="chunk-div2-2"> <label><b>Medical Gas Generalist 2021 </b></label><br> <div class="testing-window"><label>Testing Window: 18 AUG 2021 to 31 DEC <br> 9999 </label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio" value="Medical Gas Inspector 2018 "> <div class="chunk-div2-2"> <label><b>Medical Gas Inspector 2018</b></label><br> <div class="testing-window"><label>Testing Window: 18 AUG 2021 to 31 DEC <br> 9999 </label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio" value="Medical Gas Inspector 2021"> <div class="chunk-div2-2"> <label><b>Medical Gas Inspector 2021</b></label><br> <div class="testing-window"><label>Testing Window: 18 AUG 2021 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio" value="Medical Gas Inspector Recertification 2021"> <div class="chunk-div2-2"> <label><b>Medical Gas Inspector Recertification 2021</b></label><br> <div class="testing-window"><label>Testing Window: 18 AUG 2021 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio"  value="Medical Gas Installer 2018 "> <div class="chunk-div2-2"> <label><b>Medical Gas Installer 2018</b></label><br> <div class="testing-window"><label>Testing Window: 18 AUG 2021 to 31 DEC <br> 9999 </label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio" value="Medical Gas Installer 2021"> <div class="chunk-div2-2"> <label><b>Medical Gas Installer 2021</b></label><br> <div class="testing-window"><label>Testing Window: 18 AUG 2021 to 31 <br> DEC 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio" value="Medical Gas Instructor 2021 Recertification A"> <div class="chunk-div2-2"> <label><b>Medical Gas Instructor 2021 Recertification A</b></label><br> <div class="testing-window"><label>Testing Window: 15 FEB 2022 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio" value="Medical Gas Instructor Recertification 2021"> <div class="chunk-div2-2"> <label><b>Medical Gas Instructor Recertification 2021</b></label><br> <div class="testing-window"><label>Testing Window: 18 AUG 2021 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio" value="Medical Gas Maintenance 2018"> <div class="chunk-div2-2"> <label><b>Medical Gas Maintenance 2018</b></label><br> <div class="testing-window"><label>Testing Window: 18 AUG 2021 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio" value="Medical Gas Maintenance 2021"> <div class="chunk-div2-2"> <label><b>Medical Gas Maintenance 2021</b></label><br> <div class="testing-window"><label>Testing Window: 18 AUG 2021 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio" value="Medical Gas Verifier 2018"> <div class="chunk-div2-2"> <label><b>Medical Gas Verifier 2018</b></label><br> <div class="testing-window"><label>Testing Window: 18 AUG 2021 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio" value="Medical Gas Verifier 2021"> <div class="chunk-div2-2"> <label><b>Medical Gas Verifier 2021</b></label><br> <div class="testing-window"><label>Testing Window: 18 AUG 2021 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio" value="Medical Gas Verifier 2021 Recertification A"> <div class="chunk-div2-2"> <label><b>Medical Gas Verifier 2021 Recertification A</b></label><br> <div class="testing-window"><label>Testing Window: 15 FEB 2022 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio" value="Medical Gas Verifier Practical 2018 A"> <div class="chunk-div2-2"> <label><b>Medical Gas Verifier Practical 2018</b></label><br> <div class="testing-window"><label>Testing Window: 18 AUG 2021 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio" value="Medical Gas Verifier Practical 2018"> <div class="chunk-div2-2"> <label><b>Medical Gas Verifier Practical 2018</b></label><br> <div class="testing-window"><label>Testing Window: 18 AUG 2021 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio" value="Medical Gas Verifier Practical 2021"> <div class="chunk-div2-2"> <label><b>Medical Gas Verifier Practical 2021</b></label><br> <div class="testing-window"><label>Testing Window: 18 AUG 2021 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio"  value="Medical Gas Verifier Recertification 2021"> <div class="chunk-div2-2"> <label><b>Medical Gas Verifier Recertification 2021</b></label><br> <div class="testing-window"><label>Testing Window: 18 AUG 2021 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio" value="Piping Industry Entry Level Assessment"> <div class="chunk-div2-2"> <label><b>Piping Industry Entry Level Assessment</b></label><br> <div class="testing-window"><label>Testing Window: 01 OCT 2021 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio"  value="STAR Commercial Refrigeration Mastery"> <div class="chunk-div2-2"> <label><b>STAR Commercial Refrigeration Mastery</b></label><br> <div class="testing-window"><label>Testing Window: 15 SEP 2021 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio"  value="STAR Fire Sprinklerfitting Mastery A"> <div class="chunk-div2-2"> <label><b>STAR Fire Sprinklerfitting Mastery A</b></label><br> <div class="testing-window"><label>Testing Window: 15 SEP 2021 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio" value="STAR Fire Sprinklerfitting Mastery Recertification A"> <div class="chunk-div2-2"> <label><b>STAR Fire Sprinklerfitting Mastery Recertification A</b></label><br> <div class="testing-window"><label>Testing Window: 15 SEP 2021 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio" value="STAR HVACR Mastery B"> <div class="chunk-div2-2"> <label><b>STAR HVACR Mastery B</b></label><br> <div class="testing-window"><label>Testing Window: 15 SEP 2021 to 31 DEC <br> 9999 </label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio" value="STAR HVACR Mastery Recertification A"> <div class="chunk-div2-2"> <label><b>STAR HVACR Mastery Recertification A</b></label><br> <div class="testing-window"><label>Testing Window: 15 SEP 2021 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio" value="STAR Plumbing Mastery"> <div class="chunk-div2-2"> <label><b>STAR Plumbing Mastery</b></label><br> <div class="testing-window"><label>Testing Window: 15 SEP 2021 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio"  value="STAR Residential-Light Commercial HVAC Mastery"> <div class="chunk-div2-2"> <label><b>STAR Residential-Light Commercial HVAC Mastery</b></label><br> <div class="testing-window"><label>Testing Window: 15 SEP 2021 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" name="radio" value="STAR Steamfitting-Pipefitting Mastery"> <div class="chunk-div2-2"> <label><b>STAR Steamfitting-Pipefitting Mastery</b></label><br> <div class="testing-window"><label>Testing Window: 15 SEP 2021 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-bottom-border"></div> </div> </div>'

const national_institute_for_automotive_service_excellence_section1 = '<div class="section1"> <div class="tutorial" style="margin-top: 35px;"> <label>Tutorial / Survey(0 hr. 30 min.)</label> </div> <div class="chunk"> <div class="chunk-div"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)"  value="A1 Auto: Engine Repair--1"> <div class="chunk-div1"> <label><b>A1 Auto: Engine Repair</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999 </label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="NBOPE Journeyman Plumber 2018 (Open)--1"> <div class="chunk-div2-2"> <label><b>A1R Auto: Engine Repair Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="A2 Auto: Automatic Transmission/Transaxle--1"> <div class="chunk-div2-2"> <label><b>A2 Auto: Automatic Transmission/Transaxle</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="A2R Auto: Automatic Transmission/Transaxle Recert--1"> <div class="chunk-div2-2"> <label><b>A2R Auto: Automatic Transmission/Transaxle Recert </b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="A3 Auto: Manual Drive Train & Axles--1"> <div class="chunk-div2-2"> <label><b>A3 Auto: Manual Drive Train & Axles</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="A3R Auto: Manual Drive Train & Axles Recert--1"> <div class="chunk-div2-2"> <label><b>A3R Auto: Manual Drive Train & Axles Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="A4 Auto: Suspension & Steering--1"> <div class="chunk-div2-2"> <label><b>A4 Auto: Suspension & Steering</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="A4R Auto: Suspension & Steering Recert--1"> <div class="chunk-div2-2"> <label><b>A4R Auto: Suspension & Steering Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="A5 Auto: Brakes--1"> <div class="chunk-div2-2"> <label><b>A5 Auto: Brakes</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="A5R Auto: Brakes Recert--1"> <div class="chunk-div2-2"> <label><b>A5R Auto: Brakes Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="A6 Auto: Electrical/Electronic Systems--1"> <div class="chunk-div2-2"> <label><b>A6 Auto: Electrical/Electronic Systems</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC  <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="A6R Auto: Electrical/Electronic Systems Recert--1"> <div class="chunk-div2-2"> <label><b>A6R Auto: Electrical/Electronic Systems Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="A7 Auto: Heating & Air Conditioning--1"> <div class="chunk-div2-2"> <label><b>A7 Auto: Heating & Air Conditioning</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="A7R Auto: Heating & Air Conditioning Recert--1"> <div class="chunk-div2-2"> <label><b>A7R Auto: Heating & Air Conditioning Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="A8 Auto: Engine Performance--1"> <div class="chunk-div2-2"> <label><b>A8 Auto: Engine Performance</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="A8R Auto: Engine Performance Recert--1"> <div class="chunk-div2-2"> <label><b>A8R Auto: Engine Performance Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="A9 Auto: Light Vehicle Diesel Engines--1"> <div class="chunk-div2-2"> <label><b>A9 Auto: Light Vehicle Diesel Engines</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="A9R Auto: Light Vehicle Diesel Engines Recert--1"> <div class="chunk-div2-2"> <label><b>A9R Auto: Light Vehicle Diesel Engines Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="B2 Coll: Painting & Refinishing--1"> <div class="chunk-div2-2"> <label><b>B2 Coll: Painting & Refinishing</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="B2R Coll: Painting & Refinishing Recert--1"> <div class="chunk-div2-2"> <label><b>B2R Coll: Painting & Refinishing Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="B3 Coll: Non-Structural Analysis & Damage Repair--1"> <div class="chunk-div2-2"> <label><b>B3 Coll: Non-Structural Analysis & Damage Repair</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="B3R Coll: Non-Structural Analysis & Repair Recert--1"> <div class="chunk-div2-2"> <label><b>B3R Coll: Non-Structural Analysis & Repair Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999 </label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="B4 Coll: Structural Analysis & Damage Repair--1"> <div class="chunk-div2-2"> <label><b>B4 Coll: Structural Analysis & Damage Repair</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="B4R Coll: Structural Analysis & Repair Recert--1"> <div class="chunk-div2-2"> <label><b>B4R Coll: Structural Analysis & Repair Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="B5 Coll: Mechanical & Electrical Components--1"> <div class="chunk-div2-2"> <label><b>B5 Coll: Mechanical & Electrical Components </b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="B5R Coll: Mechanical & Electrical Comp Recert--1"> <div class="chunk-div2-2"> <label><b>B5R Coll: Mechanical & Electrical Comp Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="B6 Coll:Damage Analysis & Estimating--1"> <div class="chunk-div2-2"> <label><b>B6 Coll:Damage Analysis & Estimating</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999 </label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="B6R Coll: Damage Analysis & Estimating Recert--1"> <div class="chunk-div2-2"> <label><b>B6R Coll: Damage Analysis & Estimating Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="BMW1: Associate Level Assessment--1"> <div class="chunk-div2-2"> <label><b>BMW1: Associate Level Assessment </b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="BMW2: Member Level Assessment--1"> <div class="chunk-div2-2"> <label><b>BMW2: Member Level Assessment </b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="BMW3: Collision Repair Technician Assessment--1"> <div class="chunk-div2-2"> <label><b>BMW3: Collision Repair Technician Assessment</b></label><br> <div class="testing-window"><label>Testing Window: 02 MAR 2022 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="C1 Serv Consult: Auto Service Consultant--1"> <div class="chunk-div2-2"> <label><b>C1 Serv Consult: Auto Service Consultant</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC  <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="C1R Serv Consult: Auto Service Consultant Recert--1"> <div class="chunk-div2-2"> <label><b>C1R Serv Consult: Auto Service Consultant Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="E1 Trk Equip: Installation & Repair--1"> <div class="chunk-div2-2"> <label><b>E1 Trk Equip: Installation & Repair </b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="E1R Trk Equip: Installation & Repair Recert--1"> <div class="chunk-div2-2"> <label><b>E1R Trk Equip: Installation & Repair Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="E2 Trk Equip: Electrical/Electronic Systems--1"> <div class="chunk-div2-2"> <label><b>E2 Trk Equip: Electrical/Electronic Systems</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="E2R Trk Equip: Electrical/Electronic Sys Recert--1"> <div class="chunk-div2-2"> <label><b>E2R Trk Equip: Electrical/Electronic Sys Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="E3 Trk Equip: Auxiliary Power Systems--1"> <div class="chunk-div2-2"> <label><b>E3 Trk Equip: Auxiliary Power Systems</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999 </label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="E3R Trk Equip: Auxiliary Power Systems Recert--1"> <div class="chunk-div2-2"> <label><b>E3R Trk Equip: Auxiliary Power Systems Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="F1 Alt Fuels: Compressed Natural Gas Vehicle--1"> <div class="chunk-div2-2"> <label><b>F1 Alt Fuels: Compressed Natural Gas Vehicle</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="F1R Alt Fuels: Compressed Nat Gas Vehicle Recert--1"> <div class="chunk-div2-2"> <label><b>F1R Alt Fuels: Compressed Nat Gas Vehicle Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="G1 Maint & Lt Repair: Auto Maintenance & Light Repair--1"> <div class="chunk-div2-2"> <label><b>G1 Maint & Lt Repair: Auto Maintenance & Light Repair </b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="G1R Maint & Lt Repair: Auto Maintenance & Lt Repair Recert--1"> <div class="chunk-div2-2"> <label><b>G1R Maint & Lt Repair: Auto Maintenance & Lt Repair Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999 </label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="H1 T Bus: Compressed Natural Gas Engines--1"> <div class="chunk-div2-2"> <label><b>H1 T Bus: Compressed Natural Gas Engines</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="H1R T Bus: Compressed Natural Gas Engines Recert--1"> <div class="chunk-div2-2"> <label><b>H1R T Bus: Compressed Natural Gas Engines Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="H2 T Bus: Diesel Engines--1"> <div class="chunk-div2-2"> <label><b>H2 T Bus: Diesel Engines</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="H2R Transit Bus: Diesel Engines Recert--1"> <div class="chunk-div2-2"> <label><b>H2R Transit Bus: Diesel Engines Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="H3 T Bus: Drive Train--1"> <div class="chunk-div2-2"> <label><b>H3 T Bus: Drive Train</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999 </label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="H3R Transit Bus: Drive Train Recert--1"> <div class="chunk-div2-2"> <label><b>H3R Transit Bus: Drive Train Recert </b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="H4 T Bus: Brakes--1"> <div class="chunk-div2-2"> <label><b>H4 T Bus: Brakes</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="H4R T Bus: Brakes Recert--1"> <div class="chunk-div2-2"> <label><b>H4R T Bus: Brakes Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="H5 T Bus: Suspension & Steering--1"> <div class="chunk-div2-2"> <label><b>H5 T Bus: Suspension & Steering </b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="H5R Transit Bus: Suspension & Steering Recert--1"> <div class="chunk-div2-2"> <label><b>H5R Transit Bus: Suspension & Steering Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="H6 T Bus: Electrical/Electronic Systems--1"> <div class="chunk-div2-2"> <label><b>H6 T Bus: Electrical/Electronic Systems</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="H6R T Bus: Electrical/Electronic Systems Recert--1"> <div class="chunk-div2-2"> <label><b>H6R T Bus: Electrical/Electronic Systems Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="H7 T Bus: Heating, Ventilation, & A/C--1"> <div class="chunk-div2-2"> <label><b>H7 T Bus: Heating, Ventilation, & A/C</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="H7R Transit Bus: Heating, Ventilation & A/C Recert--1"> <div class="chunk-div2-2"> <label><b>H7R Transit Bus: Heating, Ventilation & A/C Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="H8 T Bus: Preventive Maintenance & Inspection--1"> <div class="chunk-div2-2"> <label><b>H8 T Bus: Preventive Maintenance & Inspection</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="H8R T Bus: Preventive Maint & Inspection Recert--1"> <div class="chunk-div2-2"> <label><b>H8R T Bus: Preventive Maint & Inspection Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="L1 Adv: Advanced Engine Performance Specialist--1"> <div class="chunk-div2-2"> <label><b>L1 Adv: Advanced Engine Performance Specialist</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="L1R Adv: Advanced Engine Performance Spec Recert--1"> <div class="chunk-div2-2"> <label><b>L1R Adv: Advanced Engine Performance Spec Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="L2 Adv: Electronic Diesel Engine Diagnosis--1"> <div class="chunk-div2-2"> <label><b>L2 Adv: Electronic Diesel Engine Diagnosis</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="L2 Adv: Electronic Diesel Engine Diagnosis--1"> <div class="chunk-div2-2"> <label><b>L2R Adv: Electronic Diesel Engine Diag Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="L3 Adv: Lt Duty Hybrid/Electric Vehicle Specialist--1"> <div class="chunk-div2-2"> <label><b>L3 Adv: Lt Duty Hybrid/Electric Vehicle Specialist</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="L3R Adv: Lt Duty Hybrid/Electric Vehicle Specialist Recert--1"> <div class="chunk-div2-2"> <label><b>L3R Adv: Lt Duty Hybrid/Electric Vehicle Specialist Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="L4 Adv: Advanced Driver Assistance Systems Specialist--1"> <div class="chunk-div2-2"> <label><b>L4 Adv: Advanced Driver Assistance Systems Specialist</b></label><br> <div class="testing-window"><label>Testing Window: 17 MAY 2022 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="MIL2 Military: Diesel Engines--1"> <div class="chunk-div2-2"> <label><b>MIL2 Military: Diesel Engines</b></label><br> <div class="testing-window"><label>Testing Window: 21 OCT 2020 to 31 DEC <br> 9999 </label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="MIL3 Military: Drive Train--1"> <div class="chunk-div2-2"> <label><b>MIL3 Military: Drive Train</b></label><br> <div class="testing-window"><label>Testing Window: 21 OCT 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="MIL4 Military: Chassis--1"> <div class="chunk-div2-2"> <label><b>MIL4 Military: Chassis</b></label><br> <div class="testing-window"><label>Testing Window: 21 OCT 2020 to 31 DEC <br> 9999 </label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="MIL5 Military: Suspension, Steering, and Hydraulics--1"> <div class="chunk-div2-2"> <label><b>MIL5 Military: Suspension, Steering, and Hydraulics</b></label><br> <div class="testing-window"><label>Testing Window: 21 OCT 2020 to 31 DEC <br> 9999 </label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="MIL6 Military: Electrical/Electronic Systems--1"> <div class="chunk-div2-2"> <label><b>MIL6 Military: Electrical/Electronic Systems</b></label><br> <div class="testing-window"><label>Testing Window: 21 OCT 2020 to 31 DEC <br> 9999 </label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="MIL7 Military: Heating, Ventilation, and A/C--1"> <div class="chunk-div2-2"> <label><b>MIL7 Military: Heating, Ventilation, and A/C </b></label><br> <div class="testing-window"><label>Testing Window: 21 OCT 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="MIL8 Military: Preventive Maint.Checks & Services--1"> <div class="chunk-div2-2"> <label><b>MIL8 Military: Preventive Maint.Checks & Services </b></label><br> <div class="testing-window"><label>Testing Window: 21 OCT 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="P1 Parts: M/H Truck Parts Specialist--1"> <div class="chunk-div2-2"> <label><b>P1 Parts: M/H Truck Parts Specialist </b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="P1R Parts: M/H Truck Parts Specialist Recert--1"> <div class="chunk-div2-2"> <label><b>P1R Parts: M/H Truck Parts Specialist Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999 </label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="P2 Parts: Automobile Parts Specialist--1"> <div class="chunk-div2-2"> <label><b>P2 Parts: Automobile Parts Specialist</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="P2R Parts: Automobile Parts Specialist Recert--1"> <div class="chunk-div2-2"> <label><b>P2R Parts: Automobile Parts Specialist Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="P4 Parts: General Motors Parts Consultant--1"> <div class="chunk-div2-2"> <label><b>P4 Parts: General Motors Parts Consultant </b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="P4R Parts: General Motors Parts Consultant Recert--1"> <div class="chunk-div2-2"> <label><b>P4R Parts: General Motors Parts Consultant Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="S1 S Bus: Body Systems & Special Equipment--1"> <div class="chunk-div2-2"> <label><b>S1 S Bus: Body Systems & Special Equipment</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="S1R S Bus: Body Systems & Special Equip Recert--1"> <div class="chunk-div2-2"> <label><b>S1R S Bus: Body Systems & Special Equip Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999 </label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="S2 S Bus: Diesel Engines--1"> <div class="chunk-div2-2"> <label><b>S2 S Bus: Diesel Engines</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="S2R S Bus: Diesel Engines Recert--1"> <div class="chunk-div2-2"> <label><b>S2R S Bus: Diesel Engines Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="S3 S Bus: Drive Train--1"> <div class="chunk-div2-2"> <label><b>S3 S Bus: Drive Train</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="S3R S Bus: Drive Train Recert--1"> <div class="chunk-div2-2"> <label><b>S3R S Bus: Drive Train Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="S4 S Bus: Brakes--1"> <div class="chunk-div2-2"> <label><b>S4 S Bus: Brakes</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="S4R S Bus: Brakes Recert--1"> <div class="chunk-div2-2"> <label><b>S4R S Bus: Brakes Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="S5 S Bus: Suspension & Steering--1"> <div class="chunk-div2-2"> <label><b>S5 S Bus: Suspension & Steering</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="S5R S Bus: Suspension & Steering Recert--1"> <div class="chunk-div2-2"> <label><b>S5R S Bus: Suspension & Steering Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="S6 S Bus: Electrical/Electronic Systems--1"> <div class="chunk-div2-2"> <label><b>S6 S Bus: Electrical/Electronic Systems</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="S6R S Bus: Electrical/Electronic Systems Recert--1"> <div class="chunk-div2-2"> <label><b>S6R S Bus: Electrical/Electronic Systems Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="S7 S Bus: Air Conditioning Systems & Controls--1"> <div class="chunk-div2-2"> <label><b>S7 S Bus: Air Conditioning Systems & Controls</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="S7R S Bus: A/C Systems & Controls Recert--1"> <div class="chunk-div2-2"> <label><b>S7R S Bus: A/C Systems & Controls Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="T1 M/H Truck: Gasoline Engines--1"> <div class="chunk-div2-2"> <label><b>T1 M/H Truck: Gasoline Engines</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="T1R M/H Truck: Gasoline Engines Recert--1"> <div class="chunk-div2-2"> <label><b>T1R M/H Truck: Gasoline Engines Recert </b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="T2 M/H Truck: Diesel Engines--1"> <div class="chunk-div2-2"> <label><b>T2 M/H Truck: Diesel Engines</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="T2R M/H Truck: Diesel Engines Recert--1"> <div class="chunk-div2-2"> <label><b>T2R M/H Truck: Diesel Engines Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="T3 M/H Truck: Drive Train--1"> <div class="chunk-div2-2"> <label><b>T3 M/H Truck: Drive Train</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="T3R M/H Truck: Drive Train Recert--1"> <div class="chunk-div2-2"> <label><b>T3R M/H Truck: Drive Train Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="T4 M/H Truck: Brakes--1"> <div class="chunk-div2-2"> <label><b>T4 M/H Truck: Brakes</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="T4R M/H Truck: Brakes Recert--1"> <div class="chunk-div2-2"> <label><b>T4R M/H Truck: Brakes Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="T4R M/H Truck: Brakes Recert--1"> <div class="chunk-div2-2"> <label><b>T4R M/H Truck: Brakes Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="T4R M/H Truck: Brakes Recert--1"> <div class="chunk-div2-2"> <label><b>T4R M/H Truck: Brakes Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="T5 M/H Truck: Suspension & Steering--1"> <div class="chunk-div2-2"> <label><b>T5 M/H Truck: Suspension & Steering</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="T5R M/H Truck: Suspension & Steering Recert--1"> <div class="chunk-div2-2"> <label><b>T5R M/H Truck: Suspension & Steering Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="T6 M/H Truck: Electrical/Electronic Systems--1"> <div class="chunk-div2-2"> <label><b>T6 M/H Truck: Electrical/Electronic Systems</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="T6R M/H Truck: Electrical/Electronic Sys Recert--1"> <div class="chunk-div2-2"> <label><b>T6R M/H Truck: Electrical/Electronic Sys Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="T7 M/H Truck: Heating, Ventilation, & A/C--1"> <div class="chunk-div2-2"> <label><b>T7 M/H Truck: Heating, Ventilation, & A/C </b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="T7R M/H Truck: Heating, Ventilation & A/C Recert--1"> <div class="chunk-div2-2"> <label><b>T7R M/H Truck: Heating, Ventilation & A/C Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999 </label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="T8 M/H Truck: Preventive Maintenance & Inspection--1"> <div class="chunk-div2-2"> <label><b>T8 M/H Truck: Preventive Maintenance & Inspection</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="T8R M/H Truck: Preventive Maint & Inspect Recert--1"> <div class="chunk-div2-2"> <label><b>T8R M/H Truck: Preventive Maint & Inspect Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="X1 Specialty: Exhaust Systems--1"> <div class="chunk-div2-2"> <label><b>X1 Specialty: Exhaust Systems</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="X1R Specialty: Exhaust Systems Recert--1"> <div class="chunk-div2-2"> <label><b>X1R Specialty: Exhaust Systems Recert</b></label><br> <div class="testing-window"><label>Testing Window: 18 MAY 2020 to 31 DEC <br> 9999</label></div> </div> </div> <p>The selected exams will be scheduled as back to back appointments. Your appointment duration cannot exceed 6 hr. 30 min. </p> <div class="chunk-bottom-border"></div> </div> </div>';

const ETOE_Interpret_section1 = '<div class="section1"><div class="chunk"> <div class="chunk-div"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)"  value="Certified Healthcare Interpreter (CHI) - Arabic--1"> <div class="chunk-div1"> <label><b>Certified Healthcare Interpreter (CHI) - Arabic</b></label><br> <div class="testing-window"><label>Testing Window: 30 DEC 2019 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Certified Healthcare Interpreter (CHI) - Mandarin--1"> <div class="chunk-div2-2"> <label><b>Certified Healthcare Interpreter (CHI) - Mandarin</b></label><br> <div class="testing-window"><label>Testing Window: 30 DEC 2019 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Certified Healthcare Interpreter (CHI) - Spanish--1"> <div class="chunk-div2-2"> <label><b>Certified Healthcare Interpreter (CHI) - Spanish</b></label><br> <div class="testing-window"><label>Testing Window: 30 DEC 2019 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="ETOE Interpreting Skills Examination--1"> <div class="chunk-div2-2"> <label><b>ETOE Interpreting Skills Examination</b></label><br> <div class="testing-window"><label>Testing Window: 30 DEC 2019 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-bottom-border"></div> </div> </div>';

const finra_section1 = '<div class="section1"> <div class="chunk"> <div class="chunk-div"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)"  value="1-151 Designated Market Maker Examination--1"> <div class="chunk-div1"> <label><b>1-151 Designated Market Maker Examination </b></label><br> <div class="testing-window"><label>Testing Window: 21 FEB 2015 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="1-154 Compliance Official for DMM Firm--1 "> <div class="chunk-div2-2"> <label><b>1-154 Compliance Official for DMM Firm </b></label><br> <div class="testing-window"><label>Testing Window: 21 FEB 2015 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="NYSE Chicago Institutional Broker Exam--1"> <div class="chunk-div2-2"> <label><b>NYSE Chicago Institutional Broker Exam</b></label><br> <div class="testing-window"><label>Testing Window: 19 AUG 2021 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Securities Industry Essentials (SIE)--1"> <div class="chunk-div2-2"> <label><b>Securities Industry Essentials (SIE)</b></label><br> <div class="testing-window"><label>Testing Window: 09 AUG 2018 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 03 - National Commodities Futures Examination (S3)--1"> <div class="chunk-div2-2"> <label><b>Series 03 - National Commodities Futures Examination (S3)</b></label><br> <div class="testing-window"><label>Testing Window: 27 APR 2006 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 04 - Registered Options Principal Exam (S4)--1"> <div class="chunk-div2-2"> <label><b>Series 04 - Registered Options Principal Exam (S4)</b></label><br> <div class="testing-window"><label>Testing Window: 27 APR 2006 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 06 - Investment Co./Variable Contracts Rep (S6TO)--1"> <div class="chunk-div2-2"> <label><b>Series 06 - Investment Co./Variable Contracts Rep (S6TO)</b></label><br> <div class="testing-window"><label>Testing Window: 09 AUG 2018 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 07 - General Securities Rep (S7TO)--1"> <div class="chunk-div2-2"> <label><b>Series 07 - General Securities Rep (S7TO)</b></label><br> <div class="testing-window"><label>Testing Window: 09 AUG 2018 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 09 - General Securities Sales Supervisor/Options (S9)--1"> <div class="chunk-div2-2"> <label><b>Series 09 - General Securities Sales Supervisor/Options (S9)</b></label><br> <div class="testing-window"><label>Testing Window: 27 APR 2006 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 10 - General Securities Sales Supervisor Exam (S10)--1"> <div class="chunk-div2-2"> <label><b>Series 10 - General Securities Sales Supervisor Exam (S10)</b></label><br> <div class="testing-window"><label>Testing Window: 27 APR 2006 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 14 - Compliance Officer Exam (S14)--1"> <div class="chunk-div2-2"> <label><b>Series 14 - Compliance Officer Exam (S14)</b></label><br> <div class="testing-window"><label>Testing Window: 27 APR 2006 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 161 - Supervisory Analyst Part I Exam (S161)--1"> <div class="chunk-div2-2"> <label><b>Series 161 - Supervisory Analyst Part I Exam (S161)</b></label><br> <div class="testing-window"><label>Testing Window: 27 APR 2006 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 162 - Supervisory Analyst Part II Exam (S162)--1"> <div class="chunk-div2-2"> <label><b>Series 162 - Supervisory Analyst Part II Exam (S162) </b></label><br> <div class="testing-window"><label>Testing Window: 16 MAY 2007 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 19 - Floor Clerk/Floor Member--1"> <div class="chunk-div2-2"> <label><b>Series 19 - Floor Clerk/Floor Member</b></label><br> <div class="testing-window"><label>Testing Window: 19 AUG 2021 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 22 - Direct Participation Programs Rep (S22TO)--1"> <div class="chunk-div2-2"> <label><b>Series 22 - Direct Participation Programs Rep (S22TO)</b></label><br> <div class="testing-window"><label>Testing Window: 09 AUG 2018 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 23 - Gen. Securities Principal - Sales Supv. (S23)--1"> <div class="chunk-div2-2"> <label><b>Series 23 - Gen. Securities Principal - Sales Supv. (S23)</b></label><br> <div class="testing-window"><label>Testing Window: 27 APR 2006 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 23 - Gen. Securities Principal - Sales Supv. (S23)--1"> <div class="chunk-div2-2"> <label><b>Series 24 - General Securities Principal Exam (S24)</b></label><br> <div class="testing-window"><label>Testing Window: 27 APR 2006 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 26 - Invest. Co. Prod./Var. Contracts Principal (S26)--1"> <div class="chunk-div2-2"> <label><b>Series 26 - Invest. Co. Prod./Var. Contracts Principal (S26)</b></label><br> <div class="testing-window"><label>Testing Window: 27 APR 2006 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 27 - Financial and Operations Principal Exam (S27)--1"> <div class="chunk-div2-2"> <label><b>Series 27 - Financial and Operations Principal Exam (S27)</b></label><br> <div class="testing-window"><label>Testing Window: 27 APR 2006 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 28 - Introducing Broker Fin. and Ops Principal (S28)--1"> <div class="chunk-div2-2"> <label><b>Series 28 - Introducing Broker Fin. and Ops Principal (S28)</b></label><br> <div class="testing-window"><label>Testing Window: 27 APR 2006 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 30 - NFA Branch Manager Examination (S30)--1"> <div class="chunk-div2-2"> <label><b>Series 30 - NFA Branch Manager Examination (S30)</b></label><br> <div class="testing-window"><label>Testing Window: 27 APR 2006 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 30 - NFA Branch Manager Examination (S30)--1"> <div class="chunk-div2-2"> <label><b>Series 30 - NFA Branch Manager Examination (S30)</b></label><br> <div class="testing-window"><label>Testing Window: 27 APR 2006 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 31 - Futures Managed Funds Examination (S31)--1"> <div class="chunk-div2-2"> <label><b>Series 31 - Futures Managed Funds Examination (S31)</b></label><br> <div class="testing-window"><label>Testing Window: 27 APR 2006 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 32 - Limited Futures Examination-Regulations (S32)--1"> <div class="chunk-div2-2"> <label><b>Series 32 - Limited Futures Examination-Regulations (S32) </b></label><br> <div class="testing-window"><label>Testing Window: 27 APR 2006 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 34 - Retail Off-Exchange Forex Examination (S34)--1"> <div class="chunk-div2-2"> <label><b>Series 34 - Retail Off-Exchange Forex Examination (S34) </b></label><br> <div class="testing-window"><label>Testing Window: 14 JUL 2008 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 39 - Direct Participation Programs Principal (S39)--1"> <div class="chunk-div2-2"> <label><b>Series 39 - Direct Participation Programs Principal (S39)</b></label><br> <div class="testing-window"><label>Testing Window: 01 MAY 2006 to 31 DEC <br> 9999 </label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 50 - Municipal Advisor Representative Exam (S50)--1"> <div class="chunk-div2-2"> <label><b>Series 50 - Municipal Advisor Representative Exam (S50)</b></label><br> <div class="testing-window"><label>Testing Window: 12 SEP 2016 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 51 - Municipal Fund Securities Principal Exam (S51)--1"> <div class="chunk-div2-2"> <label><b>Series 51 - Municipal Fund Securities Principal Exam (S51)</b></label><br> <div class="testing-window"><label>Testing Window: 27 APR 2006 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 52 - Municipal Securities Representative (S52TO)--1"> <div class="chunk-div2-2"> <label><b>Series 52 - Municipal Securities Representative (S52TO)</b></label><br> <div class="testing-window"><label>Testing Window: 09 AUG 2018 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 53 - Municipal Securities Principal Examination (S53)--1"> <div class="chunk-div2-2"> <label><b>Series 53 - Municipal Securities Principal Examination (S53) </b></label><br> <div class="testing-window"><label>Testing Window: 27 APR 2006 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 54- Municipal Advisor Principal (S54)--1"> <div class="chunk-div2-2"> <label><b>Series 54- Municipal Advisor Principal (S54)</b></label><br> <div class="testing-window"><label>Testing Window: 11 FEB 2019 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 57 - Securities Trader Rep (S57TO)--1"> <div class="chunk-div2-2"> <label><b>Series 57 - Securities Trader Rep (S57TO)</b></label><br> <div class="testing-window"><label>Testing Window: 09 AUG 2018 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 63 - Uniform Securities Agent State Law Exam (S63)--1"> <div class="chunk-div2-2"> <label><b>Series 63 - Uniform Securities Agent State Law Exam (S63)</b></label><br> <div class="testing-window"><label>Testing Window: 27 APR 2006 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 65 - Uniform Investment Adviser Law Examination (S65)--1"> <div class="chunk-div2-2"> <label><b>Series 65 - Uniform Investment Adviser Law Examination (S65) </b></label><br> <div class="testing-window"><label>Testing Window: 27 APR 2006 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 66 - Uniform Combined State Law Examination (S66)--1"> <div class="chunk-div2-2"> <label><b>Series 66 - Uniform Combined State Law Examination (S66)</b></label><br> <div class="testing-window"><label>Testing Window: 27 APR 2006 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 79 - Investment Banking Rep (S79TO)--1"> <div class="chunk-div2-2"> <label><b>Series 79 - Investment Banking Rep (S79TO)</b></label><br> <div class="testing-window"><label>Testing Window: 09 AUG 2018 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 82 - Private Securities Offerings Rep (S82TO)--1"> <div class="chunk-div2-2"> <label><b>Series 82 - Private Securities Offerings Rep (S82TO)</b></label><br> <div class="testing-window"><label>Testing Window: 09 AUG 2018 to 31 DEC <br> 9999 </label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 86 - Research Analyst Part I Exam: Analysis (S86)--1"> <div class="chunk-div2-2"> <label><b>Series 86 - Research Analyst Part I Exam: Analysis (S86)</b></label><br> <div class="testing-window"><label>Testing Window: 27 APR 2006 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 87 - Research Analyst Part II: Regulatory (S87)--1"> <div class="chunk-div2-2"> <label><b>Series 87 - Research Analyst Part II: Regulatory (S87)</b></label><br> <div class="testing-window"><label>Testing Window: 27 APR 2006 to 31 DEC <br> 9999</label></div> </div> </div> <div class="chunk-div2"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)" value="Series 99 - Operations Professional (S99TO)--1"> <div class="chunk-div2-2"> <label><b>Series 99 - Operations Professional (S99TO)</b></label><br> <div class="testing-window"><label>Testing Window: 09 AUG 2018 to 31 DEC <br> 9999</label></div> </div> </div> </div> </div>'

const north_dakota_insurance_section1 = '<div class="section1"> <div class="chunk"> <div class="chunk-div"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)"  value="Accident and Health Insurance Part I - Product--1"> <div class="chunk-div1"> <label><b>Accident and Health Insurance Part I - Product </b></label><br> <div class="testing-window"><label>Testing Window: 28 AUG 2019 to 28 FEB <br> 2022</label></div> </div> </div> </div> <div class="chunk"> <div class="chunk-div"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)"  value="Accident and Health Insurance Part II - Laws and Regulations--1"> <div class="chunk-div1"> <label><b>Accident and Health Insurance Part II - Laws and Regulations</b></label><br> <div class="testing-window"><label>Testing Window: 28 AUG 2019 to 28 FEB <br> 2022 </label></div> </div> </div> </div> <div class="chunk-bottom-border"></div> </div>'

const north_dakota_insurance_section2 = '<div class="section2"><div class="chunk"> <div class="chunk-div"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)"  value="Casualty Insurance Part I - Product--2"> <div class="chunk-div1"> <label><b>Casualty Insurance Part I - Product</b></label><br> <div class="testing-window"><label>Testing Window: 28 AUG 2019 to 28 FEB <br> 2022</label></div> </div> </div> </div> <div class="chunk"> <div class="chunk-div"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)"  value="Casualty Insurance Part II - Laws and Regulations--2"> <div class="chunk-div1"> <label><b>Casualty Insurance Part II - Laws and Regulations</b></label><br> <div class="testing-window"><label>Testing Window: 28 AUG 2019 to 28 FEB <br> 2022</label></div> </div> </div> </div> <div class="chunk-bottom-border"></div> </div>'

const north_dakota_insurance_section3 = '<div class="section3"><div class="chunk"> <div class="chunk-div"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)"  value="Life and Annuity Insurance Part I - Product--3"> <div class="chunk-div1"> <label><b>Life and Annuity Insurance Part I - Product </b></label><br> <div class="testing-window"><label>Testing Window: 28 AUG 2019 to 28 FEB <br> 2022</label></div> </div> </div> </div> <div class="chunk"> <div class="chunk-div"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)"  value="Life and Annuity Insurance Part II - Laws and Regulations--3"> <div class="chunk-div1"> <label><b>Life and Annuity Insurance Part II - Laws and Regulations</b></label><br> <div class="testing-window"><label>Testing Window: 28 AUG 2019 to 28 FEB <br> 2022</label></div> </div> </div> </div> <div class="chunk-bottom-border"></div> </div>'

const north_dakota_insurance_section4 = '<div class="section4"><div class="chunk"> <div class="chunk-div"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)"  value="Property Insurance Part I - Product--4"> <div class="chunk-div1"> <label><b>Property Insurance Part I - Product</b></label><br> <div class="testing-window"><label>Testing Window: 28 AUG 2019 to 28 FEB <br> 2022</label></div> </div> </div> </div> <div class="chunk"> <div class="chunk-div"> <input type="checkbox" id="select_option_checkbox" onclick="select_checkbox(this)"  value="Property Insurance Part II - Laws and Regulations--4"> <div class="chunk-div1"> <label><b>Property Insurance Part II - Laws and Regulations</b></label><br> <div class="testing-window"><label>Testing Window: 28 AUG 2019 to 28 FEB <br> 2022</label></div> </div> </div> </div> <div class="chunk-bottom-border"></div> </div>'

const north_dakota_insurance_section5 = '<div class="section5"> <div class="chunk"> <div class="chunk-div"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" value="Bail Bonds--5"> <div class="chunk-div1"> <label><b>Bail Bonds</b></label><br> <div class="testing-window"><label>Testing Window: 28 AUG 2019 to 28 FEB <br> 2022</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" value="Consumer Credit--5"> <div class="chunk-div2-2"> <label><b>Consumer Credit</b></label><br> <div class="testing-window"><label>Testing Window: 28 AUG 2019 to 28 FEB <br> 2022</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" value="Crop Hail--5"> <div class="chunk-div2-2"> <label><b>Crop Hail</b></label><br> <div class="testing-window"><label>Testing Window: 28 AUG 2019 to 28 FEB <br> 2022</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" value="Fingerprinting Administration Fee--5"> <div class="chunk-div2-2"> <label><b>Fingerprinting Administration Fee </b></label><br> <div class="testing-window"><label>Testing Window: 28 AUG 2019 to 28 FEB <br> 2022</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" value="Legal Expense--5"> <div class="chunk-div2-2"> <label><b>Legal Expense</b></label><br> <div class="testing-window"><label>Testing Window: 28 AUG 2019 to 28 FEB <br> 2022</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" value="Personal Lines--5"> <div class="chunk-div2-2"> <label><b>Personal Lines</b></label><br> <div class="testing-window"><label>Testing Window: 28 AUG 2019 to 28 FEB <br> 2022</label></div> </div> </div> <div class="chunk-div2"> <input type="radio" id="select_option_radio" onclick="select_radiobtn(this)" value="Public Adjuster--5"> <div class="chunk-div2-2"> <label><b>Public Adjuster</b></label><br> <div class="testing-window"><label>Testing Window: 28 AUG 2019 to 28 FEB <br> 2022</label></div> </div> </div> </div> </div>'

function rest_dropdown(dropdown_element, title) {
    dropdown_element.innerHTML = "";
    var opt = document.createElement('option');
    opt.value = "";
    opt.innerHTML = title;
    dropdown_element.appendChild(opt)
}

function set_options(value) {
    var opt = document.createElement('option');
    opt.value = value;
    opt.innerHTML = value;
    return opt
}

function national_inspection_testing_and_certification_corporation() {
    third_dropdown.style.display = "none";
    multioption_div.style.display = "block";
    document.getElementById("test_test").value = "";
    multioption_div.innerHTML = national_inspection_testing_and_certification_corporation_section1 + national_inspection_testing_and_certification_corporation_section2 + national_inspection_testing_and_certification_corporation_section3;
}

function national_institute_for_automotive_service_excellence(){
    third_dropdown.style.display = "none";
    multioption_div.style.display = "block";
    document.getElementById("test_test").value = "";
    multioption_div.innerHTML = national_institute_for_automotive_service_excellence_section1;
}

function ETOE_Interpret(){
    third_dropdown.style.display = "none";
    multioption_div.style.display = "block";
    document.getElementById("test_test").value = "";
    multioption_div.innerHTML = ETOE_Interpret_section1;
}

function finra(){
    third_dropdown.style.display = "none";
    multioption_div.style.display = "block";
    document.getElementById("test_test").value = "";
    multioption_div.innerHTML = finra_section1;
}

function north_dakota_insurance(){
    third_dropdown.style.display = "none";
    multioption_div.style.display = "block";
    document.getElementById("test_test").value = "";

    multioption_div.innerHTML = north_dakota_insurance_section1+north_dakota_insurance_section2+north_dakota_insurance_section3+north_dakota_insurance_section4+north_dakota_insurance_section5;
}

test_sponsor.addEventListener("change", function (event) {

    rest_dropdown(test_program, "Select a Program");
    rest_dropdown(test_test, "Select a Test");
    checkbox_value.value = "";
    radiobtn_value.value = "";

    third_dropdown.style.display = "block";
    multioption_div.style.display = "none";

    if (event.target.value == "AAPC") {
        test_program.appendChild(set_options("AAPC"));
    } else if (event.target.value == "ABPS") {
        test_program.appendChild(set_options("ABPS"));
    } else if (event.target.value == "Academic Language Therapy Association") {
        test_program.appendChild(set_options("Academic Language Therapy Association"));
    } else if (event.target.value == "AHA- Active House Alliance") {
        test_program.appendChild(set_options("AHA- Active House Alliance"));
    } else if (event.target.value == "Am Assoc for Lab Animal Science") {
        test_program.appendChild(set_options("American Association for Lab Animal Science"));
    } else if (event.target.value == "AM Board Quality Assurance and Utilization Review Physicians") {
        test_program.appendChild(set_options("Health Care Quality & Management"));
    } else if (event.target.value == "American Academy of Nurse Practitioners Certification Board") {
        test_program.appendChild(set_options("American Academy of Nurse Practitioners Certification Board"));
    } else if (event.target.value == "American Association of Heart Failure Nurses") {
        test_program.appendChild(set_options("American Association of Heart Failure Nurses"));
    } else if (event.target.value == "American Board for Certification in O, P&P") {
        test_program.appendChild(set_options("American Board for Certification in O, P&P"));
    } else if (event.target.value == "American Board of Cardiovascular Perfusion") {
        test_program.appendChild(set_options("American Board of Cardiovascular Perfusion"));
    } else if (event.target.value == "American Board of Dermatology") {
        test_program.appendChild(set_options("American Board of Dermatology"));
    } else if (event.target.value == "American Board of Family Medicine") {
        test_program.appendChild(set_options("American Board of Family Medicine"));
    } else if (event.target.value == "American Board of Gastroenterology Nurses") {
        test_program.appendChild(set_options("American Board of Gastroenterology Nurses"));
    } else if (event.target.value == "American Board of Ophthalmology") {
        test_program.appendChild(set_options("American Board of Ophthalmology"));
    } else if (event.target.value == "American Board of Opticianry - National Contact Lens Examine") {
        test_program.appendChild(set_options("American Board of Opticianry - National Contact Lens Examine"));
    } else if (event.target.value == "American Board of Oral and Maxillofacial Radiology") {
        test_program.appendChild(set_options("American Board of Oral and Maxillofacial Radiology"));
    } else if (event.target.value == "American Board of Oral and Maxillofacial Surgery") {
        test_program.appendChild(set_options("American Board of Oral and Maxillofacial Surgery"));
    } else if (event.target.value == "American Board of Pediatrics") {
        test_program.appendChild(set_options("American Board of Pediatrics"));
    } else if (event.target.value == "American Board of Preventive Medicine") {
        test_program.appendChild(set_options("American Board of Preventive Medicine"));
    } else if (event.target.value == "American College of Radiology") {
        test_program.appendChild(set_options("American College of Radiology"));
    } else if (event.target.value == "American College of Veterinary Dermatology") {
        test_program.appendChild(set_options("American College of Veterinary Dermatology"));
    } else if (event.target.value == "American College of Veterinary Internal Medicine") {
        test_program.appendChild(set_options("Cardiology Specialty Examination"));
        test_program.appendChild(set_options("General Examination"));
        test_program.appendChild(set_options("LAIM Specialty Exam"));
        test_program.appendChild(set_options("Neurology Specialty Examination"));
        test_program.appendChild(set_options("Nutrition Specialty Examination"));
        test_program.appendChild(set_options("Oncology Specialty Examination"));
        test_program.appendChild(set_options("SAIM Specialty Examination"));
    } else if (event.target.value == "American College of Veterinary Pathologists") {
        test_program.appendChild(set_options("American College of Veterinary Pathologists"));
    } else if (event.target.value == "American Concrete Institute") {
        test_program.appendChild(set_options("American Concrete Institute"));
    } else if (event.target.value == "American Electrology Association IBEC") {
        test_program.appendChild(set_options("American Electrology Association IBEC"));
    } else if (event.target.value == "American Institute of Certified Planners") {
        test_program.appendChild(set_options("American Institute of Certified Planners"));
    } else if (event.target.value == "American Nurses Credentialing Center") {
        test_program.appendChild(set_options("American Nurses Credentialing Center"));
        test_program.appendChild(set_options("American Nurses Credentialing Center Readiness"));
    } else if (event.target.value == "American Osteopathic Association") {
        test_program.appendChild(set_options("American Osteopathic Board of Emergency Medicine"));
        test_program.appendChild(set_options("American Osteopathic Board of Internal Medicine"));
        test_program.appendChild(set_options("American Osteopathic Board of Pediatrics"));
    } else if (event.target.value == "American Petroleum Institute") {
        test_program.appendChild(set_options("American Petroleum Institute"));
    } else if (event.target.value == "American Society for Quality") {
        test_program.appendChild(set_options("American Society for Quality"));
    } else if (event.target.value == "American Society of Mechanical Engineers") {
        test_program.appendChild(set_options("American Society of Mechanical Engineers"));
    } else if (event.target.value == "American Speech-Language-Hearing Association") {
        test_program.appendChild(set_options("ASHA Assistant Certification Program (ACP)"));
    } else if (event.target.value == "American Veterinary Medical Association") {
        test_program.appendChild(set_options("American Veterinary Medical Association"));
    }
    else if (event.target.value == "American Welding Society") {
        test_program.appendChild(set_options("American Welding Society"));
        test_program.appendChild(set_options("Prometric Test Drive-AWS"));
    }
    else if (event.target.value == "Arkansas Certified Nursing Assistant") {
        test_program.appendChild(set_options("Arkansas Certified Nursing Assistant"));
    }
    else if (event.target.value == "Arkansas Contractor Licensing Board") {
        test_program.appendChild(set_options("Arkansas Contractor Licensing Board"));
    }
    else if (event.target.value == "Ascend Learning, LLC") {
        test_program.appendChild(set_options("National Healthcareer Association"));
    }
    else if (event.target.value == "ASIS International") {
        test_program.appendChild(set_options("ASIS International"));
    }
    else if (event.target.value == "Associated Board Certifications International") {
        test_program.appendChild(set_options("Associated Board Certifications International"));
    }
    else if (event.target.value == "Association for Clinical Research Professionals") {
        test_program.appendChild(set_options("Association for Clinical Research Professionals"));
    }
    else if (event.target.value == "Association for Facilities Engineering") {
        test_program.appendChild(set_options("Association for Facilities Engineering"));
    }
    else if (event.target.value == "Association of Certified Fraud Examiners") {
        test_program.appendChild(set_options("Certified Fraud Examiner"));
    }
    else if (event.target.value == "Association of Professional Bookkeepers") {
        test_program.appendChild(set_options("Am Institute of Professional Bookkeepers"));
    }
    else if (event.target.value == "Association of Professional Bookkeepers - PREPAID") {
        test_program.appendChild(set_options("Am Institute of Professional Bookkeepers - Prepaid Students"));
    }
    else if (event.target.value == "Association of Workplace Investigators") {
        test_program.appendChild(set_options("Association of Workplace Investigators"));
        test_program.appendChild(set_options("Prometric Test Drive - AWI"));
    }
    else if (event.target.value == "Australian Council for Educational Research") {
        test_program.appendChild(set_options("International Student Admissions Test"));
    }
    else if (event.target.value == "Bahrain National Health Regulation Authority") {
        test_program.appendChild(set_options("Bahrain National Health Regulation Authority"));
    }
    else if (event.target.value == "Bangladesh College of Veterinary Surgeons") {
        test_program.appendChild(set_options("Veterinary Board Examination"));
    }
    else if (event.target.value == "Board for Global EHS Credentialing") {
        test_program.appendChild(set_options("Board for Global EHS Credentialing"));
    }
    else if (event.target.value == "Board of Pharmacy Specialties") {
        test_program.appendChild(set_options("Board Of Pharmacy Specialities Test  Drive"));
        test_program.appendChild(set_options("Board of Pharmacy Specialties"));
    }
    else if (event.target.value == "CA Engineers, Land Surveyors and Geologists") {
        test_program.appendChild(set_options("CA Engineers, Land Surveyors and Geologists"));
    }
    else if (event.target.value == "Canadian Alliance of Physiotherapy Regulators") {
        test_program.appendChild(set_options("Canadian Alliance of Physiotherapy Regulators"));
        test_program.appendChild(set_options("Canadian Alliance of Physiotherapy Regulators Practice Exams"));
    }
    else if (event.target.value == "Canadian Society for Medical Laboratory Science") {
        test_program.appendChild(set_options("Canadian Society for Medical Laboratory Science"));
        test_program.appendChild(set_options("CSMLS Exam Demo"));
    }
    else if (event.target.value == "Catalyst Futures B.V.") {
        test_program.appendChild(set_options("Catalyst Futures Systematic Trading"));
    }
    else if (event.target.value == "CDCA-WREB-CITA") {
        test_program.appendChild(set_options("CDCA-WREB-CITA"));
    }
    else if (event.target.value == "CDISC") {
        test_program.appendChild(set_options("CDISC Certification"));
    }
    else if (event.target.value == "Certible") {
        test_program.appendChild(set_options("Certible"));
        test_program.appendChild(set_options("Certible Certification"));
        test_program.appendChild(set_options("Certified Customer Experience Professional"));
        test_program.appendChild(set_options("Edinburgh Whisky Academy"));
    }
    else if (event.target.value == "Certification Board of Infection Control and Epidemiology") {
        test_program.appendChild(set_options("Certification Board of Infection Control and Epidemiology"));
    }
    else if (event.target.value == "Certification Commission for Healthcare Interpreters") {
        test_program.appendChild(set_options("Certification Commission for Healthcare Interpreters"));
        test_program.appendChild(set_options("ETOE Interpret"));
    }
    else if (event.target.value == "Certified Financial Planner") {
        test_program.appendChild(set_options("Certified Financial Planner"));
    }
    else if (event.target.value == "CFA Institute") {
        test_program.appendChild(set_options("Certificate in Investment Performance Measurement (CIPM)"));
        test_program.appendChild(set_options("CFA Program"));
        test_program.appendChild(set_options("ESG"));
    }
    else if (event.target.value == "CFA Institute Test Drive (ESG exam only)") {
        test_program.appendChild(set_options("ESG Investing TEST DRIVE"));
    }
    else if (event.target.value == "Chartered Alternative Investment Analyst Association") {
        test_program.appendChild(set_options("Financial Data Professional"));
    }
    else if (event.target.value == "Client Success") {
        test_program.appendChild(set_options("Propel Client Success"));
    }
    else if (event.target.value == "CMT Association") {
        test_program.appendChild(set_options("CMT Association"));
    }
    else if (event.target.value == "CMT Demo (ABC) Program") {
        test_program.appendChild(set_options("American Board of Certification (CMT)"));
        test_program.appendChild(set_options("Configuration Management Team"));
    }
    else if (event.target.value == "College Board - AP Exams (India)") {
        test_program.appendChild(set_options("College Board - AP Exams (India)"));
        test_program.appendChild(set_options("College Board - AP Exams (India) - Late"));
    }
    else if (event.target.value == "College Board - AP Exams (Singapore)") {
        test_program.appendChild(set_options("College Board - AP Exams (Singapore)"));
        test_program.appendChild(set_options("College Board - AP Exams (Singapore) - Late"));
    }
    else if (event.target.value == "College of Family Physicians of Canada") {
        test_program.appendChild(set_options("College of Family Physicians of Canada"));
        test_program.appendChild(set_options("Remote Compatibility Check"));
    }
    else if (event.target.value == "COLLEGE OF PHARMACISTS OF BRITISH COLUMBIA") {
        test_program.appendChild(set_options("COLLEGE OF PHARMACISTS OF BRITISH COLUMBIA"));
    }
    else if (event.target.value == "Commission for Case Manager Certification") {
        test_program.appendChild(set_options("Commission for Case Managers Certification"));
    }
    else if (event.target.value == "Confluent") {
        test_program.appendChild(set_options("Confluent"));
    }
    else if (event.target.value == "Connecticut Department of Public Health") {
        test_program.appendChild(set_options("Connecticut Department of Public Health"));
    }
    else if (event.target.value == "Construction Specifications Institute") {
        test_program.appendChild(set_options("Construction Specifications Institute"));
    }
    else if (event.target.value == "Contractor Workforce Qualification Assurance Program") {
        test_program.appendChild(set_options("Contractor Workforce Qualification Assurance Program"));
    }
    else if (event.target.value == "Council of Interstate Testing Agencies") {
        test_program.appendChild(set_options("Council of Interstate Testing Agencies"));
    }
    else if (event.target.value == "Council on Licensure, Enforcement and Regulation") {
        test_program.appendChild(set_options("Council on Licensure, Enforcement and Regulation"));
    }
    else if (event.target.value == "Department of Healthcare Professions - MOPH - State of Qatar") {
        test_program.appendChild(set_options("Department of Healthcare Professions - MOPH - State of Qatar"));
    }
    else if (event.target.value == "Design-Build Institute of America") {
        test_program.appendChild(set_options("Design-Build Institute of America"));
    }
    else if (event.target.value == "DSST") {
        test_program.appendChild(set_options("College Student"));
        test_program.appendChild(set_options("DANTES"));
    }
    else if (event.target.value == "Dubai Health Authority") {
        test_program.appendChild(set_options("Dubai Health Authority"));
    }
    else if (event.target.value == "Dubai Health Care City Authority") {
        test_program.appendChild(set_options("Dubai Health Care City Authority"));
    }
    else if (event.target.value == "ECOTEST Quality Certificates Issuing Services") {
        test_program.appendChild(set_options("ECOTEST Quality Certificates Issuing Services Program"));
    }
    else if (event.target.value == "Educational Records Bureau") {
        test_program.appendChild(set_options("Educational Records Bureau"));
    }
    else if (event.target.value == "EduClasses") {
        test_program.appendChild(set_options("Food Managers Certification"));
    }
    else if (event.target.value == "Elsevier") {
        test_program.appendChild(set_options("Elsevier"));
    }
    else if (event.target.value == "ETS TESTING") {
        test_program.appendChild(set_options("GACE ParaProfessional"));
    }
    else if (event.target.value == "European Personnel Selection Office") {
        test_program.appendChild(set_options("389/21(AD6) - field of sustainable agriculture + rural devel"));
        test_program.appendChild(set_options("CAST JRC"));
        test_program.appendChild(set_options("COM/AD/01/20 Internal Competition"));
        test_program.appendChild(set_options("COM/AD/02/21 Internal Competition AD5"));
        test_program.appendChild(set_options("COM/TA/AD/01-04/21 Translators"));
        test_program.appendChild(set_options("COM/TA/AD01-AD04/21"));
        test_program.appendChild(set_options("EPSO Certification Examination"));
        test_program.appendChild(set_options("EPSO/AD/375-379/20 Lawyer Linguists"));
        test_program.appendChild(set_options("EPSO/AD/375-379/20 Lawyer Linguists (AD7)"));
        test_program.appendChild(set_options("EPSO/AD/380/19"));
        test_program.appendChild(set_options("EPSO/AD/381/20"));
        test_program.appendChild(set_options("EPSO/AD/381/20 Administrators in the field of European Law"));
        test_program.appendChild(set_options("EPSO/AD/382/20"));
        test_program.appendChild(set_options("EPSO/AD/382/20 EEAS"));
        test_program.appendChild(set_options("EPSO/AD/383-388/21 LL OT"));
        test_program.appendChild(set_options("EPSO/AD/383-388/21 LL OT Translation test"));
        test_program.appendChild(set_options("EPSO/AD/389/21 - field of sustainable agriculture + rural de"));
        test_program.appendChild(set_options("EPSO/AD/390/21 - field of chemicals policy Written Test"));
        test_program.appendChild(set_options("EPSO/AD/390/21 (AD6) - field of chemicals policy"));
        test_program.appendChild(set_options("EPSO/AD/391/21"));
        test_program.appendChild(set_options("EPSO/AD/392/21 - Administrators"));
        test_program.appendChild(set_options("EPSO/AD/392/21 - CO385"));
        test_program.appendChild(set_options("EPSO/AD/393/21 EDPS"));
        test_program.appendChild(set_options("EPSO/AD/393/21 European Data Protection Supervision (EDPS)"));
        test_program.appendChild(set_options("EPSO/AD/394-395/21"));
        test_program.appendChild(set_options("EPSO/AD/394-395/21 - Case Study"));
        test_program.appendChild(set_options("EPSO/AD/396/21"));
        test_program.appendChild(set_options("EPSO/AD/396/21 LL GA Translation"));
        test_program.appendChild(set_options("EPSO/AD/397/21"));
        test_program.appendChild(set_options("EPSO/AD/398/22"));
        test_program.appendChild(set_options("EPSO/AD/399/22"));
        test_program.appendChild(set_options("EPSO/AST/148/21"));
        test_program.appendChild(set_options("EPSO/AST/149/21 Nuclear Inspectors"));
        test_program.appendChild(set_options("EPSO/AST/149/21 Nuclear Inspectors Case Study"));
        test_program.appendChild(set_options("EPSO/AST/150/21"));
        test_program.appendChild(set_options("EPSO/AST/151/22"));
        test_program.appendChild(set_options("EPSO/AST/152/22"));
        test_program.appendChild(set_options("EPSO/AST/152/22 FRT"));
        test_program.appendChild(set_options("EPSO/AST/153/22"));
        test_program.appendChild(set_options("EPSO/AST/154/22 (fields: 1-2)"));
        test_program.appendChild(set_options("EPSO/AST/154/22 (fields: 3-4-5-6)"));
        test_program.appendChild(set_options("EPSO/AST/155/22"));
        test_program.appendChild(set_options("EPSO/AST-SC/10/20"));
        test_program.appendChild(set_options("EPSO/AST-SC/11/21"));
        test_program.appendChild(set_options("Junior Professionals Programme"));
    }
    else if (event.target.value == "Events Industry Council") {
        test_program.appendChild(set_options("Events Industry Council"));
    }
    else if (event.target.value == "Eversource Energy Service Company") {
        test_program.appendChild(set_options("Eversource Energy Service Company-Contractor Employees only"));
        test_program.appendChild(set_options("Eversource Energy Service Company-Eversource Employees only"));
    }
    else if (event.target.value == "Exam Master Corporation") {
        test_program.appendChild(set_options("Exam Master Corporation"));
    }
    else if (event.target.value == "F5 Networks") {
        test_program.appendChild(set_options("F5 Networks"));
    }
    else if (event.target.value == "FINRA") {
        test_program.appendChild(set_options("FINRA"));
        test_program.appendChild(set_options("FINRA RP"));
        test_program.appendChild(set_options("NMLS RP"));
    }
    else if (event.target.value == "FSBPT") {
        test_program.appendChild(set_options("Federation of State Boards of Physical Therapy"));
    }
    else if (event.target.value == "GCC Electrical Testing Laboratory") {
        test_program.appendChild(set_options("GCC Electrical Testing Laboratory"));
    }
    else if (event.target.value == "Ghana Investment and Securities Institute Limited") {
        test_program.appendChild(set_options("GISI Professional Qualification"));
    }
    else if (event.target.value == "Global Fintech Institute") {
        test_program.appendChild(set_options("Chartered Fintech Professional"));
    }
    else if (event.target.value == "Green Business Certification Inc") {
        test_program.appendChild(set_options("GBCI Test Drive"));
        test_program.appendChild(set_options("Green Business Certification Inc"));
    }
    else if (event.target.value == "Gulf Organisation for Research & Development") {
        test_program.appendChild(set_options("Gulf Organisation for Research & Development"));
    }
    else if (event.target.value == "Healthcare Sterile Processing Association (Formerly IAHCSMM)") {
        test_program.appendChild(set_options("Healthcare Sterile Processing Association (Formerly IAHCSMM)"));
    }
    else if (event.target.value == "Hello World Kids") {
        test_program.appendChild(set_options("HelloCode Master Certificate"));
    }
    else if (event.target.value == "Human Assets Training Institute") {
        test_program.appendChild(set_options("Contractor Work Permit Receiver Prerequisite"));
    }
    else if (event.target.value == "Human Resources Professional Association") {
        test_program.appendChild(set_options("Human Resources Professional Association"));
    }
    else if (event.target.value == "HydraFacial Connect Certification") {
        test_program.appendChild(set_options("HydraFacial Connect Certification"));
    }
    else if (event.target.value == "Institute of Certified Management Accountants") {
        test_program.appendChild(set_options("Institute of Certified Management Accountants"));
    }
    else if (event.target.value == "International Board of Heart Rhythm Examiners") {
        test_program.appendChild(set_options("International Board of Heart Rhythm Examiners"));
    }
    else if (event.target.value == "International Board of Lactation Consultant Examiners") {
        test_program.appendChild(set_options("International Board of Lactation Consultant Examiners"));
    }
    else if (event.target.value == "International Board of Specialty Certification") {
        test_program.appendChild(set_options("International Board of Specialty Certification"));
    }
    else if (event.target.value == "International Council of Shopping Centers") {
        test_program.appendChild(set_options("International Council of Shopping Centers"));
    }
    else if (event.target.value == "International Facility Management Association") {
        test_program.appendChild(set_options("International Facility Management Association"));
    }
    else if (event.target.value == "International WELL Building Institute") {
        test_program.appendChild(set_options("International WELL Building Institute"));
    }
    else if (event.target.value == "IRS Special Enrollment Examination") {
        test_program.appendChild(set_options("IRS Special Enrollment Examination"));
    }
    else if (event.target.value == "ISA") {
        test_program.appendChild(set_options("ISA Certification & Security Certificate Exams"));
        test_program.appendChild(set_options("ISA84 Certificate Program"));
    }
    else if (event.target.value == "ISOGRAD") {
        test_program.appendChild(set_options("TOSA CERTIFICATION"));
    }
    else if (event.target.value == "KAPLN") {
        test_program.appendChild(set_options("Kaplan Official Test Day Experience"));
    }
    else if (event.target.value == "Korean Software Testing Qualifications Board") {
        test_program.appendChild(set_options("ISTQB Certified Tester"));
    }
    else if (event.target.value == "Language Testing International") {
        test_program.appendChild(set_options("Lymphology Association of North America"));
    }
    else if (event.target.value == "Law School Admission Council") {
        test_program.appendChild(set_options("Law School Admission Test"));
    }
    else if (event.target.value == "Lymphology Association of North America") {
        test_program.appendChild(set_options("Lymphology Association of North America"));
    }
    else if (event.target.value == "Maryland Insurance Administration") {
        test_program.appendChild(set_options("Maryland Insurance Administration"));
        test_program.appendChild(set_options("Maryland Insurance Administration Retake"));
    }
    else if (event.target.value == "Massachusetts Insurance") {
        test_program.appendChild(set_options("Massachusetts Insurance"));
    }
    else if (event.target.value == "Matrix42") {
        test_program.appendChild(set_options("Matrix42"));
    }
    else if (event.target.value == "Medical Council of Canada") {
        test_program.appendChild(set_options("Qualifying Examination - Part I"));
        test_program.appendChild(set_options("Therapeutics Decision-Making Examination"));
    }
    else if (event.target.value == "Medical Dosimetrist Certification Board") {
        test_program.appendChild(set_options("Medical Dosimetrist Certification Board"));
    }
    else if (event.target.value == "Medical Surgical Nursing Certification Board") {
        test_program.appendChild(set_options("Medical Surgical Nursing Certification Board"));
    }
    else if (event.target.value == "Michigan Language Assessment") {
        test_program.appendChild(set_options("Michigan English Test (MET)"));
    }
    else if (event.target.value == "Moody's Analytics") {
        test_program.appendChild(set_options("Moody's Analytics"));
    }
    else if (event.target.value == "Moody's") {
        test_program.appendChild(set_options("Moody's"));
    }
    else if (event.target.value == "National Board for Certification of School Nurses") {
        test_program.appendChild(set_options("National Board for Certification of School Nurses"));
    }
    else if (event.target.value == "National Board of Medical Examiners") {
        test_program.appendChild(set_options("American Association of Medical Assistants"));
        test_program.appendChild(set_options("American Board of Medical Genetics and Genomics"));
        test_program.appendChild(set_options("American Board of Obesity Medicine"));
        test_program.appendChild(set_options("American Board of Orthopaedic Surgery"));
        test_program.appendChild(set_options("American Board of Physical Therapy Specialties"));
        test_program.appendChild(set_options("American Board of Preventive Medicine"));
        test_program.appendChild(set_options("American Board of Quality & Utilization Review Physicians"));
        test_program.appendChild(set_options("American Board of Surgery"));
        test_program.appendChild(set_options("American Osteopathic Board Of Orthopaedic Surgery"));
        test_program.appendChild(set_options("Health & Wellness Coach Certifying Examination Program"));
        test_program.appendChild(set_options("International Board of Heart Rhythm Examiners"));
        test_program.appendChild(set_options("International Council for Veterinary Assessment"));
        test_program.appendChild(set_options("Nat. Commission for Cert. of Anesthesiologist Assistants"));
        test_program.appendChild(set_options("National Board of Echocardiography"));
        test_program.appendChild(set_options("NBME Subject Examination Program"));
        test_program.appendChild(set_options("Special Purpose Exam"));
        test_program.appendChild(set_options("STEP1"));
        test_program.appendChild(set_options("STEP2"));
        test_program.appendChild(set_options("STEP3"));
        test_program.appendChild(set_options("Surgery of the Hand Subspecialty Certification Examination"));
        test_program.appendChild(set_options("USMLE Practice Tests"));
    }
    else if (event.target.value == "National Board of Osteopathic Medical Examiners") {
        test_program.appendChild(set_options("AMERICAN BOARD OF HAIR RESTORATION SURGERY"));
    }
    else if (event.target.value == "National Commission for Health Education Credentialing") {
        test_program.appendChild(set_options("National Commission for Health Education Credentialing"));
    }
    else if (event.target.value == "National Council for Certified Personal Trainers") {
        test_program.appendChild(set_options("National Council for Certified Personal Trainers"));
    }
    else if (event.target.value == "National Council of Architectural Registration Boards") {
        test_program.appendChild(set_options("National Council of Architectural Registration Boards"));
    }
    else if (event.target.value == "National Council on Strength & Fitness") {
        test_program.appendChild(set_options("National Council on Strength & Fitness"));
    }
    else if (event.target.value == "National Dental Assisting Examining Board") {
        test_program.appendChild(set_options("National Dental Assisting Examining Board"));
    }
    else if (event.target.value == "National Dental Examining Board of Canada") {
        test_program.appendChild(set_options("National Dental Examining Board of Canada"));
    }
    else if (event.target.value == "National Elevator Industry Educational Program") {
        test_program.appendChild(set_options("National Elevator Industry Educational Program"));
    }
    else if (event.target.value == "National Federation of Paralegal Associations") {
        test_program.appendChild(set_options("National Federation of Paralegal Associations"));
    }
    else if (event.target.value == "National Fire Protection Assoc") {
        test_program.appendChild(set_options("National Fire Protection Assoc"));
    }
    else if (event.target.value == "National Football League Players Association") {
        test_program.appendChild(set_options("National Football League Players Association"));
    }
    else if (event.target.value == "National Inspection Testing and Certification Corporation") {
        test_program.appendChild(set_options("National Inspection Testing and Certification Corporation"));
    }
    else if (event.target.value == "National Institute for Automotive Service Excellence") {
        test_program.appendChild(set_options("National Institute for Automotive Service Excellence"));
    }
    else if (event.target.value == "National Registry of Certified Medical Examiners") {
        test_program.appendChild(set_options("National Registry of Certified Medical Examiners"));
    }
    else if (event.target.value == "National Roofing Contractors Association") {
        test_program.appendChild(set_options("National Roofing Contractors Association"));
    }
    else if (event.target.value == "NCIDQ") {
        test_program.appendChild(set_options("NCIDQ"));
    }
    else if (event.target.value == "NCTRC") {
        test_program.appendChild(set_options("NCTRC"));
    }
    else if (event.target.value == "Nebraska Insurance") {
        test_program.appendChild(set_options("Nebraska Insurance"));
    }
    else if (event.target.value == "New H3C Technologies Co., Ltd.") {
        test_program.appendChild(set_options("GB"));
    }
    else if (event.target.value == "New Hampshire Insurance") {
        test_program.appendChild(set_options("New Hampshire Insurance"));
    }
    else if (event.target.value == "New Mexico Insurance") {
        test_program.appendChild(set_options("New Mexico Insurance"));
    }
    else if (event.target.value == "Nokia Shanghai Bell") {
        test_program.appendChild(set_options("Nokia Partner Skills"));
    }
    else if (event.target.value == "North Dakota Insurance") {
        test_program.appendChild(set_options("North Dakota Insurance"));
        test_program.appendChild(set_options("North Dakota Insurance Retake"));
    }
    else if (event.target.value == "Northeast Gas Association") {
        test_program.appendChild(set_options("NGA Operator Qualification Program"));
    }
    else if (event.target.value == "Nursing Community Assessment Service") {
        test_program.appendChild(set_options("Nursing Community Assessment Service"));
    }
    else if (event.target.value == "Office of Administration") {
        test_program.appendChild(set_options("Commonwealth of Pennsylvania"));
    }
    else if (event.target.value == "Oklahoma Insurance") {
        test_program.appendChild(set_options("Oklahoma Bails Bondsman"));
        test_program.appendChild(set_options("Oklahoma Insurance Adjuster"));
        test_program.appendChild(set_options("Oklahoma Insurance Producer"));
    }
    else if (event.target.value == "Oman Medical Specialty Board") {
        test_program.appendChild(set_options("Oman Medical Specialty Board"));
    }
    else if (event.target.value == "Oncology Nursing Certification Corporation") {
        test_program.appendChild(set_options("Oncology Nursing Certification Corporation"));
    }
    else if (event.target.value == "Ontario College of Pharmacists") {
        test_program.appendChild(set_options("Ontario College of Pharmacists"));
    }
    else if (event.target.value == "OutSystems") {
        test_program.appendChild(set_options("OutSystems"));
    }
    else if (event.target.value == "Pediatric Nursing Certification Board") {
        test_program.appendChild(set_options("Pediatric Nursing Certification Board"));
    }
    else if (event.target.value == "PeopleCert") {
        test_program.appendChild(set_options("PeopleCert"));
    }
    else if (event.target.value == "Pharmacy Examining Board of Canada") {
        test_program.appendChild(set_options("Non-Eligibility Remote Compatibility Check"));
        test_program.appendChild(set_options("Pharmacy Examining Board of Canada"));
    }
    else if (event.target.value == "PROC") {
        test_program.appendChild(set_options("PROC"));
    }
    else if (event.target.value == "Product Development Management Association") {
        test_program.appendChild(set_options("Product Development Management Association"));
    }
    else if (event.target.value == "Professional Credentialing Services") {
        test_program.appendChild(set_options("Arizona Cosmetology"));
    }
    else if (event.target.value == "Professional Testing Corporation") {
        test_program.appendChild(set_options("AAET The Nerve Conduction Association"));
        test_program.appendChild(set_options("ABOP"));
        test_program.appendChild(set_options("ABRET Neurodiagnostic Credentialing and Accreditation"));
        test_program.appendChild(set_options("ACCE Healthcare Technology Certification Commission"));
        test_program.appendChild(set_options("AIS Certification Board"));
        test_program.appendChild(set_options("American Board of Clinical Neurophysiology"));
        test_program.appendChild(set_options("American Board of Clinical Pharmacology, Inc."));
        test_program.appendChild(set_options("American Board of Multiple Specialties in Podiatry"));
        test_program.appendChild(set_options("American Board of Neurophysiologic Monitoring"));
        test_program.appendChild(set_options("American Board of Spine Surgery"));
        test_program.appendChild(set_options("American Board of Wound Medicine and Surgery"));
        test_program.appendChild(set_options("American Hippotherapy Certification Board"));
        test_program.appendChild(set_options("American Hypertension Specialist Certification Program"));
        test_program.appendChild(set_options("Aromatherapy Registration Council"));
        test_program.appendChild(set_options("Association for Strategic Planning"));
        test_program.appendChild(set_options("Association of Marital and Family Therapy Regulatory Boards"));
        test_program.appendChild(set_options("Board of Behavioral Sleep Medicine"));
        test_program.appendChild(set_options("Canadian Board of Registration of EEG Technologists"));
        test_program.appendChild(set_options("Certification Board for Equine Interaction Professionals"));
        test_program.appendChild(set_options("Certification Council for Professional Dog Trainers"));
        test_program.appendChild(set_options("Certified Nurse Life Care Planners Certification Board"));
        test_program.appendChild(set_options("Certified Physician Life Care Planner Certification Board"));
        test_program.appendChild(set_options("Commission on Paraoptometric Certification"));
        test_program.appendChild(set_options("Consortium of Multiple Sclerosis Centers"));
        test_program.appendChild(set_options("Corporate Housing Providers Association"));
        test_program.appendChild(set_options("Culinary Medicine Specialist Board"));
        test_program.appendChild(set_options("Eye Bank Association of America"));
        test_program.appendChild(set_options("Global Business Travel Association"));
        test_program.appendChild(set_options("Immunoglobulin National Society"));
        test_program.appendChild(set_options("International Avian/Animal Trainers Certification Board"));
        test_program.appendChild(set_options("International Foundation for Retirement Education"));
        test_program.appendChild(set_options("Multiple Sclerosis Nursing Certification Board"));
        test_program.appendChild(set_options("National Academy of Certified Care Managers"));
        test_program.appendChild(set_options("National Board of Nutrition Support Certification"));
        test_program.appendChild(set_options("National Board of Physician Nutrition Specialists"));
        test_program.appendChild(set_options("National Certifying Board for Ophthalmic Registered Nurses"));
        test_program.appendChild(set_options("National Emergency Number Association"));
        test_program.appendChild(set_options("Nat'l Board for Cert of Orthopedic Physician's Assistants"));
        test_program.appendChild(set_options("Nat'l Cert Board of Otorhinolaryngology & Head-Neck Nurses"));
        test_program.appendChild(set_options("North American Registry of Midwives"));
        test_program.appendChild(set_options("Professional Animal Care Certification Council"));
        test_program.appendChild(set_options("Research Administrators Certification Council"));
        test_program.appendChild(set_options("Society for Marketing Professional Services"));
        test_program.appendChild(set_options("World Pet Association"));
    }
    else if (event.target.value == "Professional Testing Inc") {
        test_program.appendChild(set_options("National Placement and Referral Alliance"));
    }
    else if (event.target.value == "PROMETRIC") {
        test_program.appendChild(set_options("Prometric Test Drive"));
    }
    else if (event.target.value == "Prometric English Language Proficiency") {
        test_program.appendChild(set_options("Prometric English Language Proficiency Program"));
    }
    else if (event.target.value == "Public Relations Uni Acrd Board") {
        test_program.appendChild(set_options("Public Relations Uni Acrd Board"));
    }
    else if (event.target.value == "Qualcomm Technologies, Inc.") {
        test_program.appendChild(set_options("Qualcomm Certification"));
    }
    else if (event.target.value == "QuantInsti Quantitative Learning Private Limited") {
        test_program.appendChild(set_options("QuantInsti Quantitative Learning Private Limited"));
    }
    else if (event.target.value == "Rehabilitation Engineering and Assistive Technology Society") {
        test_program.appendChild(set_options("Rehabilitation Engineering and Assistive Technology Society"));
    }
    else if (event.target.value == "Saudi Commission for Health Specialities") {
        test_program.appendChild(set_options("Saudi Licencing Examination"));
        test_program.appendChild(set_options("SCHS Promotion Exams"));
    }
    else if (event.target.value == "Secuencias de cursos verificados de ABA Espana") {
        test_program.appendChild(set_options("Secuencias de cursos verificados de ABA Espana"));
    }
    else if (event.target.value == "Sharjah Health Authority") {
        test_program.appendChild(set_options("Sharjah Health Authority"));
    }
    else if (event.target.value == "Simplify Compliance") {
        test_program.appendChild(set_options("Association of Clinical Documentation Integrity Specialists"));
        test_program.appendChild(set_options("Association of Home Care Coding & Compliance"));
        test_program.appendChild(set_options("National Association of Healthcare Revenue Integrity"));
    }
    else if (event.target.value == "SOA") {
        test_program.appendChild(set_options("SOA"));
    }
    else if (event.target.value == "Society for Human Resource Management") {
        test_program.appendChild(set_options("Society for Human Resource Management"));
    }
    else if (event.target.value == "Society for Worldwide Interbank Financial Telecommunication") {
        test_program.appendChild(set_options("Society for Worldwide Interbank Financial Telecommunication"));
    }
    else if (event.target.value == "SSAT by The Enrollment Management Association") {
        test_program.appendChild(set_options("SSAT by The Enrollment Management Association"));
    }
    else if (event.target.value == "TESTCASES") {
        test_program.appendChild(set_options("ELIGIBILITY EXAMS"));
        test_program.appendChild(set_options("NON-ELIG"));
        test_program.appendChild(set_options("VOUCHER_EXAM"));
    }
    else if (event.target.value == "The Centre of Excellence for Applied Research & Training") {
        test_program.appendChild(set_options("Abu Dhabi Department of Community Development"));
        test_program.appendChild(set_options("UAE Ministry of Health"));
    }
    else if (event.target.value == "The Chartered Institute of Taxation") {
        test_program.appendChild(set_options("The Association of Taxation Technicians"));
        test_program.appendChild(set_options("The Chartered Institute of Taxation"));
    }
    else if (event.target.value == "The State Bar of California") {
        test_program.appendChild(set_options("The State Bar of California"));
    }
    else if (event.target.value == "Touchstone Institute") {
        test_program.appendChild(set_options("CELBAN"));
        test_program.appendChild(set_options("Practice CELBAN"));
    }
    else if (event.target.value == "Uniform CPA Exam") {
        test_program.appendChild(set_options("Uniform CPA Exam"));
    }
    else if (event.target.value == "Union Pacific") {
        test_program.appendChild(set_options("UP2"));
    }
    else if (event.target.value == "United States Marshals Service") {
        test_program.appendChild(set_options("United States Marshals Service"));
    }
    else if (event.target.value == "Universal Public Purchasing Certification Council") {
        test_program.appendChild(set_options("Universal Public Procurement Certification Council"));
    }
    else if (event.target.value == "Urban Planning Council") {
        test_program.appendChild(set_options("Pearl Community OR Building Rating System Exam"));
    }
    else if (event.target.value == "Utah Insurance Department") {
        test_program.appendChild(set_options("Utah Insurance Department"));
    }
    else if (event.target.value == "Vascular Access Certification Corporation") {
        test_program.appendChild(set_options("Vascular Access Certification Corporation"));
    }
    else if (event.target.value == "Vermont Insurance") {
        test_program.appendChild(set_options("Vermont Insurance"));
    }
    else if (event.target.value == "Virginia Department of Insurance") {
        test_program.appendChild(set_options("Virginia Department of Insurance"));
    }
    else if (event.target.value == "Waken Limited") {
        test_program.appendChild(set_options("Licensing School"));
    }
    else if (event.target.value == "WebCE, Inc.") {
        test_program.appendChild(set_options("TXADj"));
        test_program.appendChild(set_options("WebCE, Inc."));
    }
    else if (event.target.value == "World Bank") {
        test_program.appendChild(set_options("EDGE"));
    }
    else if (event.target.value == "ZOOM") {
        test_program.appendChild(set_options("Western Regional Examining Board"));
    }
    else if (event.target.value == "????????????") {
        test_program.appendChild(set_options("UX????????????"));
    }
    else if (event.target.value == "???????????? (OMC)") {
        test_program.appendChild(set_options("??????????????????????????????????????????"));
        test_program.appendChild(set_options("??????????????????????????????????????????????????????)"));
    }
    else if (event.target.value == "??????????????????????????????????????????????????????(CPWMSC)") {
        test_program.appendChild(set_options("??????????????????????????? (CPWM??) ????????????"));
    }
    else if (event.target.value == "???????????????????????????") {
        test_program.appendChild(set_options("???????????????"));
    }
});

test_program.addEventListener("change", function (event) {

    rest_dropdown(test_test, "Select a Test");

    checkbox_value.value = "";
    radiobtn_value.value = "";
    third_dropdown.style.display = "block";
    multioption_div.style.display = "none";

    if (event.target.value == "AAPC") {
        test_test.appendChild(set_options("CPC (Certified Professional Coder)"));
        test_test.appendChild(set_options("CPC (Certified Professional Coder) Voucher Transfer"));
    } else if (event.target.value == "ABPS") {
        test_test.appendChild(set_options("Plastic Surgery Written Exam"));
    }
    else if (event.target.value == "Academic Language Therapy Association") {
        test_test.appendChild(set_options("Certified Academic Language Practitioner"));
        test_test.appendChild(set_options("Certified Academic Language Therapist"));
    }
    else if (event.target.value == "AHA- Active House Alliance") {
        test_test.appendChild(set_options("Active House Accredited Professional"));

    }
    else if (event.target.value == "American Association for Lab Animal Science") {
        test_test.appendChild(set_options("ASSISTANT LAB ANIMAL TECHNICIAN"));
        test_test.appendChild(set_options("LABORATORY ANIMAL TECHNICIAN"));
        test_test.appendChild(set_options("LABORATORY ANIMAL TECHNOLOGIST"));

    }
    else if (event.target.value == "Health Care Quality & Management") {
        test_test.appendChild(set_options("Health Care Quality & Management"));

    }
    else if (event.target.value == "American Academy of Nurse Practitioners Certification Board") {
        test_test.appendChild(set_options("Adult-Gerontology Nurse Practitioner Exam"));
        test_test.appendChild(set_options("Emergency Nurse Practitioner Exam"));
        test_test.appendChild(set_options("Family Nurse Practitioner Exam"));

    } else if (event.target.value == "American Association of Heart Failure Nurses") {
        test_test.appendChild(set_options("CHFN"));
    } else if (event.target.value == "American Board for Certification in O, P&P") {
        test_test.appendChild(set_options("Combined O&P Written Exam"));
        test_test.appendChild(set_options("Mastectomy Fitter Written Cert. Exam"));
        test_test.appendChild(set_options("Orthotic Assistant Writter Certification Examination"));
        test_test.appendChild(set_options("Orthotic Fitter Written Cert. Exam"));
        test_test.appendChild(set_options("Orthotic Practitioner Written Cert. Exam"));
        test_test.appendChild(set_options("Orthotic Practitioner Written Sim. Cert. Exam"));
        test_test.appendChild(set_options("Orthotics Technician Written Certification Examination"));
        test_test.appendChild(set_options("Pedorthic Cert. Exam"));
        test_test.appendChild(set_options("Prosthetic Assistant Written Certification"));
        test_test.appendChild(set_options("Prosthetic Practitioner Written Cert. Exam"));
        test_test.appendChild(set_options("Prosthetic Practitioner Written Sim. Cert. Exam"));
        test_test.appendChild(set_options("Prosthetics Technician Written Certification Examination"));
        test_test.appendChild(set_options("Therapeutics Shoe Fitter Written Cert. Exam"));

    }
    else if (event.target.value == "American Board of Cardiovascular Perfusion") {
        test_test.appendChild(set_options("Clinical Applications in Perfusion Examination"));
        test_test.appendChild(set_options("Part 1 - Perfusion Basic Science Examination"));

    }
    else if (event.target.value == "American Board of Dermatology") {
        test_test.appendChild(set_options("Certification Exam"));

    }
    else if (event.target.value == "American Board of Family Medicine") {
        test_test.appendChild(set_options("Primary Certification/Recertification Exam"));
        test_test.appendChild(set_options("Sports Medicine Exam"));
    }
    else if (event.target.value == "American Board of Gastroenterology Nurses") {
        test_test.appendChild(set_options("Certified Gastroenterology Registered Nurse"));

    }
    else if (event.target.value == "American Board of Ophthalmology") {
        test_test.appendChild(set_options("Demonstration of Cognitive Ophthalmic Knowledge"));
        test_test.appendChild(set_options("Written Qualifying Examination"));
    }


    else if (event.target.value == "American Board of Opticianry - National Contact Lens Examine") {
        test_test.appendChild(set_options("American Board of Opticianry Mock Exam"));
        test_test.appendChild(set_options("American Board of Opticianry Practical Exam"));
        test_test.appendChild(set_options("Combines Contact Lens Registry Exam Basic"));
        test_test.appendChild(set_options("Combined National Opticianry Competency Exam Basic"));
        test_test.appendChild(set_options("Competency Exam Basic - NOCE Basic (Spanish)"));
        test_test.appendChild(set_options("Contact Lens Registry Exam - Advanced"));
        test_test.appendChild(set_options("Contact Lens Registry Exam - Basic"));
        test_test.appendChild(set_options("Contact Lens Registry Exam - Basic (Spanish)"));
        test_test.appendChild(set_options("National Contact Lens Examiners Practical Exam"));
        test_test.appendChild(set_options("National Opticianry Competency Exam Advanced - NOCE Advanced"));
        test_test.appendChild(set_options("National Opticianry Competency Exam Basic - NOCE Basic"));
    }
    else if (event.target.value == "American Board of Oral and Maxillofacial Radiology") {
        test_test.appendChild(set_options("Part 1 - Certifying Exam"));
    }
    else if (event.target.value == "American Board of Oral and Maxillofacial Surgery") {
        test_test.appendChild(set_options("Head and Neck Reconstructive Surgery"));
        test_test.appendChild(set_options("OMSITE"));
        test_test.appendChild(set_options("Pediatric Craniomaxillofacial Surgery"));
        test_test.appendChild(set_options("Qualifying Examination"));
    }
    else if (event.target.value == "American Board of Pediatrics") {
        test_test.appendChild(set_options("Adolescent Medicine (Certification)"));
        test_test.appendChild(set_options("Adolescent Medicine (In-training)"));
        test_test.appendChild(set_options("Adolescent Medicine (MOC - Subspecialty)"));
        test_test.appendChild(set_options("Certification in Pediatric Hospital Medicine Exam"));
        test_test.appendChild(set_options("Child Abuse Pediatrics (Certification)"));
        test_test.appendChild(set_options("Child Abuse Pediatrics (IN-training)"));
        test_test.appendChild(set_options("Development-Behavioral Pediatrics (In-training)"));
        test_test.appendChild(set_options("Development-Behavioral Pediatrics (MOC-Subspecialty)"));
        test_test.appendChild(set_options("General Pediatrics (MOC - General)"));
        test_test.appendChild(set_options("General Pediatrics Certification"));
        test_test.appendChild(set_options("Hospital Medicine In-training"));
        test_test.appendChild(set_options("Neonatal-Parinatal Medicine (Certication)"));
        test_test.appendChild(set_options("Neonatal-Parinatal Medicine (In-training)"));
        test_test.appendChild(set_options("Neonatal-Parinatal Medicine (MOC - Subspecialty)"));
        test_test.appendChild(set_options("Pediatric Cardiology (Certification)"));
        test_test.appendChild(set_options("Pediatric Cardiology (In-training)"));
        test_test.appendChild(set_options("Pediatric Cardiology (MOC - Subspecialty)"));
        test_test.appendChild(set_options("Pediatric Critical Care Medicine (Certification)"));
        test_test.appendChild(set_options("Pediatric Critical Care Medicine (In-training)"));
        test_test.appendChild(set_options("Pediatric Critical Care Medicine (MOC - Subspecialty)"));
        test_test.appendChild(set_options("Pediatric Development-Behavioral (Certification)"));
        test_test.appendChild(set_options("Pediatric Emergency Medicine (Certification)"));
        test_test.appendChild(set_options("Pediatric Emergency Medicine (In-training)"));
        test_test.appendChild(set_options("Pediatric Emergency Medicine (MOC - Subspecialty)"));
        test_test.appendChild(set_options("Pediatric Endocrinology (Certification)"));
        test_test.appendChild(set_options("Pediatric Endocrinology (In-training)"));
        test_test.appendChild(set_options("Pediatric Endocrinology (MOC - Subspecialty)"));
        test_test.appendChild(set_options("Pediatric Gastroenterology (Certification)"));
        test_test.appendChild(set_options("Pediatric Gastroenterology (In-training)"));
        test_test.appendChild(set_options("Pediatric Gastroenterology (MOC - Subspecialty)"));
        test_test.appendChild(set_options("Pediatric Hematology-Oncology (Certification)"));
        test_test.appendChild(set_options("Pediatric Hematology-Oncology (In-training)"));
        test_test.appendChild(set_options("Pediatric Hematology-Oncology (MOC - Subspecialty)"));
        test_test.appendChild(set_options("Pediatric Infectious Disease (In-training)"));
        test_test.appendChild(set_options("Pediatric Infectious Diseases (Certification)"));
        test_test.appendChild(set_options("Pediatric Infectious Diseases (MOC - Subspecialty)"));
        test_test.appendChild(set_options("Pediatric Nephrology (Certification)"));
        test_test.appendChild(set_options("Pediatric Nephrology (In-training)"));
        test_test.appendChild(set_options("Pediatric Nephrology (MOC - Subspecialty)"));
        test_test.appendChild(set_options("Pediatric Pulmonology (Certification)"));
        test_test.appendChild(set_options("Pediatric Pulmonology (In-training)"));
        test_test.appendChild(set_options("Pediatric Pulmonology (MOC - Subspecialty)"));
        test_test.appendChild(set_options("Pediatric Rheumatology (Certification))"));
        test_test.appendChild(set_options("Pediatric Rheumatology (In-training)"));
        test_test.appendChild(set_options("Pediatric Rheumatology (MOC - Subspecialty)"));
    }
    else if (event.target.value == "American Board of Preventive Medicine") {
        test_test.appendChild(set_options("Addiction Medicine Exam"));
        test_test.appendChild(set_options("Aerospace Medicine Exam"));
        test_test.appendChild(set_options("Clinical Informatics Exam"));
        test_test.appendChild(set_options("Core Exam"));
        test_test.appendChild(set_options("Occupational Medicine Exam"));
        test_test.appendChild(set_options("Public Health and General Preventive Medicine Exam"));
        test_test.appendChild(set_options("Undersea and Hyperbaric Medicine Exam"));
    }
    else if (event.target.value == "American College of Radiology") {
        test_test.appendChild(set_options("Diagnostic In-training Examination"));
        test_test.appendChild(set_options("Radiation Oncology In-Training Examination"));
    }
    else if (event.target.value == "American College of Veterinary Dermatology") {
        test_test.appendChild(set_options("ACVD Certifying Examination"));
    }
    else if (event.target.value == "Cardiology Specialty Examination") {
        test_test.appendChild(set_options("Anatomy/Pathology"));
        test_test.appendChild(set_options("Case Studies"));
        test_test.appendChild(set_options("Essay"));
        test_test.appendChild(set_options("MC"));
        test_test.appendChild(set_options("Physiologic Recordings"));
        test_test.appendChild(set_options("Video"));
    }
    else if (event.target.value == "General Examination") {
        test_test.appendChild(set_options("General Examination, Gen"));
        test_test.appendChild(set_options("General Examination, LA"));
        test_test.appendChild(set_options("General Examination, SA"));
    }
    else if (event.target.value == "LAIM Specialty Exam") {
        test_test.appendChild(set_options("CM"));
        test_test.appendChild(set_options("MC1"));
        test_test.appendChild(set_options("MC2"));
    }
    else if (event.target.value == "Neurology Specialty Examination") {
        test_test.appendChild(set_options("Clinical Cases"));
        test_test.appendChild(set_options("Electrodiagnostics"));
        test_test.appendChild(set_options("MC"));
        test_test.appendChild(set_options("Pathology"));
        test_test.appendChild(set_options("Radiology"));
    }
    else if (event.target.value == "Nutrition Specialty Examination") {
        test_test.appendChild(set_options("Clinical Cases Management"));
        test_test.appendChild(set_options("General Principles of Nutrition"));
        test_test.appendChild(set_options("Practical and Clinical Nutrition"));
    }
    else if (event.target.value == "Oncology Specialty Examination") {
        test_test.appendChild(set_options("MC1: Basic Science"));
        test_test.appendChild(set_options("MC2, Part A: Applied Clinical"));
        test_test.appendChild(set_options("MC2, Part B: Clinical Decision Making"));
    }
    else if (event.target.value == "SAIM Specialty Examination") {
        test_test.appendChild(set_options("SAIM Knowledge & Problem Solving"));
        test_test.appendChild(set_options("SAIM Medical Literature/MC"));
        test_test.appendChild(set_options("SAIM Patient Management"));
        test_test.appendChild(set_options("SAIM Knowledge & Problem Solving"));
        test_test.appendChild(set_options("SAIM Written"));
    }
    else if (event.target.value == "American College of Veterinary Pathologists") {
        test_test.appendChild(set_options("Phase II Anatomic Pathology Certifying Examination"));
        test_test.appendChild(set_options("Phase II Clinical Pathology Certifying Examination"));
    }
    else if (event.target.value == "American Concrete Institute") {
        test_test.appendChild(set_options("CONCRETE FIELD TESTING TECHNICIAN-GRADE I"));
        test_test.appendChild(set_options("CONCRETE FLATWORK ASSOCIATE & ADVANCED FLATWORK FINISHER"));
        test_test.appendChild(set_options("CONCRETE STRENGTH TESTING TECHNICIAN"));
        test_test.appendChild(set_options("CSA-Based Concrete Field-Testing Technician - Grade I"));
        test_test.appendChild(set_options("SHORTCRETE NOZZLEMAN-DRY MIX PROCESS"));
        test_test.appendChild(set_options("SHORTCRETE NOZZLEMAN-WET MIX PROCESS"));
        test_test.appendChild(set_options("TILT-UP SUPERVISOR/TECHNICIAN"));
    }
    else if (event.target.value == "American Electrology Association IBEC") {
        test_test.appendChild(set_options("AEA Licensure- Connecticut"));
        test_test.appendChild(set_options("AEA Licensure- Illinois"));
        test_test.appendChild(set_options("AEA Licensure- Maryland"));
        test_test.appendChild(set_options("AEA Licensure- New Jersey"));
        test_test.appendChild(set_options("AEA Licensure- North Carolina"));
        test_test.appendChild(set_options("AEA Licensure- Vermont"));
        test_test.appendChild(set_options("AEA Licensure- Wisconsin"));
        test_test.appendChild(set_options("Cert Prof Elec Exam (CPEM)"));
        test_test.appendChild(set_options("IBEC Electrology, Laser, and IPL Exam- FL"));
        test_test.appendChild(set_options("IBEC Licensure Exam"));

    }
    else if (event.target.value == "American Institute of Certified Planners") {
        test_test.appendChild(set_options("AICP Certification Exam"));
    }
    else if (event.target.value == "American Nurses Credentialing Center") {
        test_test.appendChild(set_options("Adult-Gerontology Acute Care Nurse Practitioner"));
        test_test.appendChild(set_options("Adult-Gerontology Acute Care Nurse Practitioner - Field Test"));
        test_test.appendChild(set_options("Adult-Gerontology Clinical Nurse Specialist"));
        test_test.appendChild(set_options("Adult-Gerontology Clinical Nurse Specialist -Field Test"));
        test_test.appendChild(set_options("Adult-Gerontology Primary Care Nurse Practioner"));
        test_test.appendChild(set_options("Adult-Gerontology Primary Care Nurse Practitioner- Field Test"));
        test_test.appendChild(set_options("Ambulatory Care Nursing"));
        test_test.appendChild(set_options("Ambulatory Care Nurse - Field Test"));
        test_test.appendChild(set_options("Cardiac Vascular Nursing"));
        test_test.appendChild(set_options("Cardiac-Vascular Nursing - Field Test"));
        test_test.appendChild(set_options("Case Management Nursing"));
        test_test.appendChild(set_options("Family NP"));
        test_test.appendChild(set_options("Family Nurse Practioner - Field Test"));
        test_test.appendChild(set_options("Field Test - Nurse Executive Advanced"));
        test_test.appendChild(set_options("Gerontological Nursing"));
        test_test.appendChild(set_options("Gerontology Nursing - Field Test"));
        test_test.appendChild(set_options("Informatics Nursing"));
        test_test.appendChild(set_options("Informatics Nursing - Field Test"));
        test_test.appendChild(set_options("Medical Surgical Nursing - Field Test"));
        test_test.appendChild(set_options("Medical-Surgical Nursing"));
        test_test.appendChild(set_options("National Healthcare Disaster Professional"));
        test_test.appendChild(set_options("Nurse Executive"));
        test_test.appendChild(set_options("Nurse Executive - Advanced"));
        test_test.appendChild(set_options("Nursing Case Management - Field Test"));
        test_test.appendChild(set_options("Nursing Executive - Field Test"));
        test_test.appendChild(set_options("Nursing Professional Development"));
        test_test.appendChild(set_options("Nursing Professional Development - Field Test"));
        test_test.appendChild(set_options("Pain Management Nursing"));
        test_test.appendChild(set_options("Pain Management Nursing - Field Test"));
        test_test.appendChild(set_options("Pediatric Nursing"));
        test_test.appendChild(set_options("Pediatric Nursing - Field Test"));
        test_test.appendChild(set_options("Pediatric Primary Care Nurse Practioner"));
        test_test.appendChild(set_options("Pediatric Primary Care Nurse Practioner - Field Test"));
        test_test.appendChild(set_options("Psychiatric-Mental Health Nurse Practioner"));
        test_test.appendChild(set_options("Psychiatric-Mental Health Nursing - Field Test"));
        test_test.appendChild(set_options("Psychiatric-Mental Health Nursing"));
        test_test.appendChild(set_options("Psychiatric-Mental Health Nursing - Field Test"));

    }
    else if (event.target.value == "American Nurses Credentialing Center Readiness") {
        test_test.appendChild(set_options("Adult-Gerontology Acute Care NP Comprehensive Readiness"));
        test_test.appendChild(set_options("Adult-Gerontology Primary Care NP Comprehensive Readiness"));
        test_test.appendChild(set_options("Adult-Gerontology Primary Care NP Domain II Readiness"));
        test_test.appendChild(set_options("Family Nurse Practioner Comprehensive Readiness"));
        test_test.appendChild(set_options("Medical-Surgical Nursing Comprehensive Readiness"));
        test_test.appendChild(set_options("Nursing Professional Development Comprehensive Readiness"));
        test_test.appendChild(set_options("Psychiatric-Mental Health NP Comprehensive Readiness Test"));
        test_test.appendChild(set_options("Psychiatric-Mental Health Nursing Comprehensive Readiness"));
        test_test.appendChild(set_options("Psychiatric-Mental Health Nursing Domain III Readiness"));
    }
    else if (event.target.value == "American Osteopathic Board of Emergency Medicine") {
        test_test.appendChild(set_options("AOBEM Certification Examination Part 1"));
        test_test.appendChild(set_options("AOBEM Cognitive Assessment Examination"));
    }

    else if (event.target.value == "American Osteopathic Board of Internal Medicine") {
        test_test.appendChild(set_options("AOBIM Cardiology (Certification)"));
        test_test.appendChild(set_options("AOBIM Cardiology (Recertification)"));
        test_test.appendChild(set_options("AOBIM Clinical Cardiac Electrophysiology (Certification)"));
        test_test.appendChild(set_options("AOBIM Clinical Cardiac Electrophysiology (Recertification)"));
        test_test.appendChild(set_options("AOBIM Critical Care Medicine (Certification)"));
        test_test.appendChild(set_options("AOBIM Critical Care Medicine (Recertification)"));
        test_test.appendChild(set_options("AOBIM Endocrinology (Certification)"));
        test_test.appendChild(set_options("AOBIM Endocrinology (Recertification)"));
        test_test.appendChild(set_options("AOBIM Gastroenterology (Certification)"));
        test_test.appendChild(set_options("AOBIM Gastroenterology (Recertification)"));
        test_test.appendChild(set_options("AOBIM Geriatric Medicine (Certification)"));
        test_test.appendChild(set_options("AOBIM Geriatric Medicine (Recertification)"));
        test_test.appendChild(set_options("AOBIM Hematology (Certification)"));
        test_test.appendChild(set_options("AOBIM Hematology (Recertification)"));
        test_test.appendChild(set_options("AOBIM Hospice and Palliative Medicine (Certification)"));
        test_test.appendChild(set_options("AOBIM Hospice and Palliative Medicine (Recertification)"));
        test_test.appendChild(set_options("AOBIM Hospital Medicine (Recertification)"));
        test_test.appendChild(set_options("AOBIM Infectious Disease (Certification)"));
        test_test.appendChild(set_options("AOBIM Infectious Disease (Recertification)"));
        test_test.appendChild(set_options("AOBIM Interventional Cardiology (Certification)"));
        test_test.appendChild(set_options("AOBIM Interventional Cardiology (Recertification)"));
        test_test.appendChild(set_options("AOBIM Nephrology (Certification)"));
        test_test.appendChild(set_options("AOBIM Nephrology (Recertification/OCC) Exam"));
        test_test.appendChild(set_options("AOBIM Oncology (Certification)"));
        test_test.appendChild(set_options("AOBIM Oncology (Recertification)"));
        test_test.appendChild(set_options("AOBIM PULMONARY DISEASES (RECERTIFICATION)"));
        test_test.appendChild(set_options("AOBIM Pulmonary Diseases (Certification)"));
        test_test.appendChild(set_options("AOBIM Rheumatology (Certification)"));
        test_test.appendChild(set_options("AOBIM Rheumatology (Recertification)"));
        test_test.appendChild(set_options("AOBIM Sleep Medicine (Certification)"));
        test_test.appendChild(set_options("AOBIM Sleep Medicine (Recertification)"));
        test_test.appendChild(set_options("Internal Medicine Certification"));
        test_test.appendChild(set_options("Internal Medicine OCC"));
    }
    else if (event.target.value == "American Osteopathic Board of Pediatrics") {
        test_test.appendChild(set_options("AOBP Certification Exam"));
        test_test.appendChild(set_options("General Pediatrics OCC Cognitive Assessment Exam"));
    }
    else if (event.target.value == "American Petroleum Institute") {
        test_test.appendChild(set_options("1169 - Pipeline Inspector Certification"));
        test_test.appendChild(set_options("1169 - Pipeline Inspector Certification (Translated)"));
        test_test.appendChild(set_options("1184 - Pipeline Facility Construction Inspector"));
        test_test.appendChild(set_options("1184 - Pipeline Facility Construction Inspector (Translated)"));
        test_test.appendChild(set_options("510 - Pressure Vessel Inspector Certification"));
        test_test.appendChild(set_options("510 - Pressure Vessel Inspector Certification (Translated)"));
        test_test.appendChild(set_options("570 - Pipeline Inspector Certification"));
        test_test.appendChild(set_options("579 - Piping Inspector Certification (Translated)"));
        test_test.appendChild(set_options("571 - Corrosion & Material"));
        test_test.appendChild(set_options("571 - Corrosion & Material (Translated)"));
        test_test.appendChild(set_options("577 - Welding Inspection Metallurgy"));
        test_test.appendChild(set_options("580 - Risk Based Inspection"));
        test_test.appendChild(set_options("580 - Risk Based Inspection (Translated)"));
        test_test.appendChild(set_options("653 - Aboveground Storage Tanks"));
        test_test.appendChild(set_options("653 - Aboveground Storage Tanks (Translated)"));
        test_test.appendChild(set_options("939 - Refractory Personal Certification"));
        test_test.appendChild(set_options("936 - Refractory Personal Certification (Translated)"));
        test_test.appendChild(set_options("AQ1-Certified Auditor Professional Q1"));
        test_test.appendChild(set_options("AQ1-Certified Auditor Professional Q1 (Translated)"));
        test_test.appendChild(set_options("AQ2-Certified Auditor Professional Q2"));
        test_test.appendChild(set_options("SIEE - SIRE - Source Inspector Electrical Equipment"));
        test_test.appendChild(set_options("SIFE - Source Inspector Fixed Equipment"));
        test_test.appendChild(set_options("SIFE - Source Inspector Fixed Equipment (Translated)"));
        test_test.appendChild(set_options("SIRE - Source Inspector Rotating Equipment"));
        test_test.appendChild(set_options("TES - Tank Entry Supervisors"));
    }
    else if (event.target.value == "American Society for Quality") {
        test_test.appendChild(set_options("Certified Calibration Technician"));
        test_test.appendChild(set_options("Certified FedEx/ASQ QDM Expert"));
        test_test.appendChild(set_options("Certified Food Safety and Quality Auditor"));
        test_test.appendChild(set_options("Certified Manager of Quality Organizational Excellence (PBT)"));
        test_test.appendChild(set_options("Certified Manager of Quality/Organizational Excellence"));
        test_test.appendChild(set_options("Certified Master Black Belt"));
        test_test.appendChild(set_options("Certified Medical Device Auditor"));
        test_test.appendChild(set_options("Certified Pharmaceutical GMP Professional"));
        test_test.appendChild(set_options("Certified Quality Auditor"));
        test_test.appendChild(set_options("Certified Quality Engineer"));
        test_test.appendChild(set_options("Certified Quality Engineer (PBT)"));
        test_test.appendChild(set_options("Certified Quality Improvement Associate"));
        test_test.appendChild(set_options("Certified Quality inspector"));
        test_test.appendChild(set_options("Certified Quality Process Analyst"));
        test_test.appendChild(set_options("Certified Quality Technician"));
        test_test.appendChild(set_options("Certified Reliability Engineer"));
        test_test.appendChild(set_options("Certified Reliability Engineer (PBT)"));
        test_test.appendChild(set_options("Certified Six Sigma Black Belt"));
        test_test.appendChild(set_options("Certified Six Sigma Black Belt (PBT)"));
        test_test.appendChild(set_options("Certified Six Sigma Green Belt"));
        test_test.appendChild(set_options("Certified Six Sigma Green Belt (PBT)"));
        test_test.appendChild(set_options("Certified Six Sigma Yellow Belt"));
        test_test.appendChild(set_options("Certified Software Quality Engineer"));
        test_test.appendChild(set_options("Certified Supplier Quality Professional"));
        test_test.appendChild(set_options("Lean Specialized Credential"));
    }
    else if (event.target.value == "American Society of Mechanical Engineers") {
        test_test.appendChild(set_options("ASME NON DESTRUCTIVE EXAMINATION"));
        test_test.appendChild(set_options("CERT OF GD&T 1994 SENIOR LEVEL"));
        test_test.appendChild(set_options("CERT OF GD&T 1994 TECHNOLOGIST LEVEL"));
        test_test.appendChild(set_options("CERT OF GD&T 2009 SENIOR LEVEL"));
        test_test.appendChild(set_options("CERT OF GD&T 2009 TECHNOLOGIST LEVEL"));
        test_test.appendChild(set_options("CERT OF RESOURCE RECOVERY FACILITY OPERATORS"));
        test_test.appendChild(set_options("QFO"));
    }
    else if (event.target.value == "ASHA Assistant Certification Program (ACP)") {
        test_test.appendChild(set_options("Audiology Assistants"));
        test_test.appendChild(set_options("Speech-Language Pathology Assistants"));
    }
    else if (event.target.value == "American Veterinary Medical Association") {
        test_test.appendChild(set_options("Basic and Clinical Sciences Exam"));
        test_test.appendChild(set_options("Basic and Clinical Sciences Exam French"));
    }
    else if (event.target.value == "American Welding Society") {
        test_test.appendChild(set_options("ASME BPVC Section IX, Power B31.1 and Process B31.3 Piping"));
        test_test.appendChild(set_options("AWS API 1104 Pipeline"));
        test_test.appendChild(set_options("AWS CWI Part C API 1104 Pipeline"));
        test_test.appendChild(set_options("AWS CWI Part C D1.1 Structural Steel"));
        test_test.appendChild(set_options("AWS CWI Part C D1.5 Bridge Welding"));
        test_test.appendChild(set_options("AWS CWI Part C D17.1 Aerospace"));
        test_test.appendChild(set_options("AWS Certified Welding Engineer Part 1 Science Fundamentals"));
        test_test.appendChild(set_options("AWS Certified Welding Engineer Part 2 Applied Science"));
        test_test.appendChild(set_options("AWS Certified Welding Engineer Part 3 Welding Disciplines"));
        test_test.appendChild(set_options("AWS Certified Welding Engineer Part 4 Practical Welding"));
        test_test.appendChild(set_options("AWS Certified Welding Inspector (CWI) Part A Fundamentals"));
        test_test.appendChild(set_options("AWS D1.1 Structural Steel"));
        test_test.appendChild(set_options("AWS D1.2 Structural Aluminum"));
        test_test.appendChild(set_options("AWS D1.5 Bridge Welding"));
        test_test.appendChild(set_options("AWS D15.1 Railraod"));
        test_test.appendChild(set_options("AWS D17.1 Aerospace"));
        test_test.appendChild(set_options("AWS Magnetic Particle Testing (MT) Part A Fundamentals"));
        test_test.appendChild(set_options("AWS Magnetic Particle Testing (MT) Part C Specific"));
        test_test.appendChild(set_options("AWS Penetrant Testing (PT) Part A Fundamentals"));
        test_test.appendChild(set_options("AWS Penetrant Testing (PT) Part C Specific"));
        test_test.appendChild(set_options("AWS Senior Certified Welding Inspector (SCWI)"));
        test_test.appendChild(set_options("AWS Welder Performance Qualifier Endorsement-WPQ1"));
        test_test.appendChild(set_options("AWS Welding Procedure Qualifier Endorsement-WPQ2"));
        test_test.appendChild(set_options("Certified Resistance Welding Technician"));
        test_test.appendChild(set_options("Certified Welding Sales Representative (CWSR)"));
        test_test.appendChild(set_options("Certified Welding Supervisor Part A"));
        test_test.appendChild(set_options("Certified Welding Supervisor Part B"));
        test_test.appendChild(set_options("D1.5 Bridge Welding"));
        test_test.appendChild(set_options("ISO Standards Exam"));
        test_test.appendChild(set_options("Senior Certified Welding Inspector (SCWI) Parts A and B"));
        test_test.appendChild(set_options("Structural Bolting Inspection"));
    }
    else if (event.target.value == "Prometric Test Drive-AWS") {
        test_test.appendChild(set_options("Prometric Test Drive"));
    }
    else if (event.target.value == "Arkansas Contractor Licensing Board") {
        test_test.appendChild(set_options("Commercial Business and Law"));
    }
    else if (event.target.value == "National Healthcareer Association") {
        test_test.appendChild(set_options("NHA Certified Billing and Coding Specialist"));
        test_test.appendChild(set_options("NHA Certified Clinical Medical Assistant"));
        test_test.appendChild(set_options("NHA Certified EKG Technician"));
        test_test.appendChild(set_options("NHA Certified Medical Administrative Assistant"));
        test_test.appendChild(set_options("NHA Certified Patient Care Technician/Assistant"));
        test_test.appendChild(set_options("NHA Certified Pharmacy Technician"))
        test_test.appendChild(set_options("NHA Certified Phlebotomy Technician"));;
        test_test.appendChild(set_options("NHA Electronic Health Record Specialist"));
    }

    else if (event.target.value == "ASIS International") {
        test_test.appendChild(set_options("APP-Associate Protection Professional"));
        test_test.appendChild(set_options("APPS-Profesional De Proteccion Asociado"));
        test_test.appendChild(set_options("CPP-Certified Protection Professional"));
        test_test.appendChild(set_options("CPPS-Profesional Certificado en Protecci??n"));
        test_test.appendChild(set_options("PCI - Professional Certified Investigator"));
        test_test.appendChild(set_options("PCIS - Invesdigator Profesional Certificado"));
        test_test.appendChild(set_options("PSP- Physical Security Professional"));
        test_test.appendChild(set_options("PSPS- Profesional en Seguridad Fisica"));

    }
    else if (event.target.value == "Associated Board Certifications International") {
        test_test.appendChild(set_options("ABCI Demo Exam"));
        test_test.appendChild(set_options("PLT21"));
        test_test.appendChild(set_options("PLT6"));
        test_test.appendChild(set_options("PRAC"));
        test_test.appendChild(set_options("Professional Licensure Test"));
        test_test.appendChild(set_options("Professional Licensure Test 2"));
        test_test.appendChild(set_options("Professional Licensure Test 3"));
        test_test.appendChild(set_options("Professional Licensure Test 4"));
        test_test.appendChild(set_options("True Ability Integration"));
        test_test.appendChild(set_options("True Ability Integration Test"));
    }
    else if (event.target.value == "Association for Clinical Research Professionals") {
        test_test.appendChild(set_options("ACRP Certified Professional"));
        test_test.appendChild(set_options("ACRP Project Manager"));
        test_test.appendChild(set_options("Certified Principal Investigator"));
        test_test.appendChild(set_options("Clinical Research Associate"));
        test_test.appendChild(set_options("Clinical Research Coordinator"));
        test_test.appendChild(set_options("Medical Device Professional Exam"));
    }
    else if (event.target.value == "Association for Facilities Engineering") {
        test_test.appendChild(set_options("Certified Plant Engineer"));
        test_test.appendChild(set_options("Certified Professional Maintenance Manager"));
        test_test.appendChild(set_options("Certified Professional Maintenance Manager - Spanish"));
        test_test.appendChild(set_options("Certified Professional Supervisor"));
        test_test.appendChild(set_options("Certified Professional Supervisor - Spanish"));
    }
    else if (event.target.value == "Certified Fraud Examiner") {
        test_test.appendChild(set_options("2021 CFE Exam - Financial Transactions and Fraud Schemes"));
        test_test.appendChild(set_options("2021 CFE Exam - Fraud Prevention and Deterrence"));
        test_test.appendChild(set_options("2021 CFE Exam - Investigation"));
        test_test.appendChild(set_options("2021 CFE Exam - Law"));
        test_test.appendChild(set_options("2022 CFE Exam - Financial Transactions and Fraud Schemes"));
        test_test.appendChild(set_options("2022 CFE Exam - Fraud Prevention and Deterrence"));
        test_test.appendChild(set_options("2022 CFE Exam - Investigation"));
        test_test.appendChild(set_options("2022 CFE Exam - Law"));
        test_test.appendChild(set_options("CFE Exam- Financial Transactions and Fraud Schemes"));
        test_test.appendChild(set_options("CFE Exam- Fraud Prevention and Deterrence"));
        test_test.appendChild(set_options("CFE Exam- Investigation"));
        test_test.appendChild(set_options("CFE Exam- Law"));
    }
    else if (event.target.value == "Am Institute of Professional Bookkeepers") {
        test_test.appendChild(set_options("ADJUSTMENTS AND ERROR CORRECTION"));
        test_test.appendChild(set_options("ADJUSTMENTS RETEST"));
        test_test.appendChild(set_options("DEPRECIATION RETEST"));
        test_test.appendChild(set_options("Discontinued-INVENTROY"));
        test_test.appendChild(set_options("ERROR CORRECTION RETEST"));
        test_test.appendChild(set_options("PAYROLL AND DEPRECIATION"));
        test_test.appendChild(set_options("PAYROLL RETEST"));

    }
    else if (event.target.value == "Am Institute of Professional Bookkeepers - Prepaid Students") {
        test_test.appendChild(set_options("ADJUSTMENTS AND ERROR CORRECTION"));
        test_test.appendChild(set_options("Adjustments Retest"));
        test_test.appendChild(set_options("Depreciation Retest"));
        test_test.appendChild(set_options("Discontinued-INVENTROY"));
        test_test.appendChild(set_options("Error Correction Retest"));
        test_test.appendChild(set_options("PAYROLL AND DEPRECIATION"));
        test_test.appendChild(set_options("Payroll Retest"));
    }
    else if (event.target.value == "Association of Workplace Investigators") {
        test_test.appendChild(set_options("Analysis and Report Writiing Assessment"));
        test_test.appendChild(set_options("Knowledge Test"));
        test_test.appendChild(set_options("Knowledge Test & Analysis and Report Writiing Assessment"));
    }
    else if (event.target.value == "Prometric Test Drive - AWI") {
        test_test.appendChild(set_options("Prometric Test Driver"));
    }
    else if (event.target.value == "International Student Admissions Test") {
        test_test.appendChild(set_options("ISAT"));
        test_test.appendChild(set_options("ISATR"));
    }
    // *********************************************************************************
    else if (event.target.value == "Bahrain National Health Regulation Authority") {
        test_test.appendChild(set_options("Anastasia Tech"));
        test_test.appendChild(set_options("Anesthesia"));
        test_test.appendChild(set_options("Bahrain Dental Licensure Examination"));
        test_test.appendChild(set_options("Bahrain Medical Licensure Examination"));
        test_test.appendChild(set_options("Bahrain Nursing Licensure Examination"));
        test_test.appendChild(set_options("Bahrain Pharmacy Licensure Examination"));
        test_test.appendChild(set_options("Cardiology"));
        test_test.appendChild(set_options("Clinical Dietician"));
        test_test.appendChild(set_options("Clinical Psychology"));
        test_test.appendChild(set_options("Critical Care Medicine"));
        test_test.appendChild(set_options("Dental Assistant"));
        test_test.appendChild(set_options("Dental Hygiene"));
        test_test.appendChild(set_options("Dental Implantology Examination"));
        test_test.appendChild(set_options("Dermatology"));
        test_test.appendChild(set_options("Diagnostic Radiology"));
        test_test.appendChild(set_options("Dietetics"));
        test_test.appendChild(set_options("Emergency Medicine"));
        test_test.appendChild(set_options("Endocrinology"));
        test_test.appendChild(set_options("Endodontics"));
        test_test.appendChild(set_options("Gastroenterology"));
        test_test.appendChild(set_options("General Surgery"));
        test_test.appendChild(set_options("Hematology and Oncology"));
        test_test.appendChild(set_options("Internal Medicine"));
        test_test.appendChild(set_options("Lab Technician Diploma"));
        test_test.appendChild(set_options("Lab Technologist Bachelor"));
        test_test.appendChild(set_options("Midwifery"));
        test_test.appendChild(set_options("Neurology"));
        test_test.appendChild(set_options("Nuclear Medicine Technologist"));
        test_test.appendChild(set_options("Nutrition"));
        test_test.appendChild(set_options("Obstetrics and Gynecology"));
        test_test.appendChild(set_options("Ophthalmology"));
        test_test.appendChild(set_options("Optometrist"));
        test_test.appendChild(set_options("Oral and Maxillofacial Surgery"));
        test_test.appendChild(set_options("Orthodontics"));
        test_test.appendChild(set_options("Orthopedic Surgery"));
        test_test.appendChild(set_options("Otorhinolaryngology"));
        test_test.appendChild(set_options("Pediatric Dentistry"));
        test_test.appendChild(set_options("Pediatrics"));
        test_test.appendChild(set_options("Periodontics"));
        test_test.appendChild(set_options("Pharmacy Tech"));
        test_test.appendChild(set_options("Physiotherapist"));
        test_test.appendChild(set_options("Plastic Surgery"));
        test_test.appendChild(set_options("Prosthodontics"));
        test_test.appendChild(set_options("Psychiatry"));
        test_test.appendChild(set_options("Radiographer (Technologist)"));
        test_test.appendChild(set_options("Radiology (Technician)"));
        test_test.appendChild(set_options("Respiratory Care Licensure Examination"));
    }
    else if (event.target.value == "Veterinary Board Examination") {
        test_test.appendChild(set_options("Member of the College of Veterinary Surgeons"));
    }
    else if (event.target.value == "Board for Global EHS Credentialing") {
        test_test.appendChild(set_options("CERTIFIED INDUSTRIAL HYGIENIST"));
    }
    else if (event.target.value == "Board Of Pharmacy Specialities Test  Drive") {
        test_test.appendChild(set_options("BPS Test Drive"));
    }
    else if (event.target.value == "Board of Pharmacy Specialties") {
        test_test.appendChild(set_options("BOARD CERTIFIED SOLID ORGAN TRANSPLANTATION PHARMACY"));
        test_test.appendChild(set_options("Board Certified Ambulatory Care Pharmacist"));
        test_test.appendChild(set_options("Board Certified Ambulatory Care Pharmacist Recertification"));
        test_test.appendChild(set_options("Board Certified Cardiology Pharmacist"));
        test_test.appendChild(set_options("Board Certified Critical Care Pharmacist"));
        test_test.appendChild(set_options("Board Certified Critical Care Pharmacist Recertification"));
        test_test.appendChild(set_options("Board Certified Emergency Medicine Pharmacist"));
        test_test.appendChild(set_options("Board Certified Geriatric Pharmacist"));
        test_test.appendChild(set_options("Board Certified Geriatric Pharmacist Recertification"));
        test_test.appendChild(set_options("Board Certified Infectious Diseases Pharmacist"));
        test_test.appendChild(set_options("Board Certified Nuclear Pharmacist"));
        test_test.appendChild(set_options("Board Certified Nuclear Pharmacist Recertification"));
        test_test.appendChild(set_options("Board Certified Nutrition Support Pharmacist"));
        test_test.appendChild(set_options("Board Certified Nutrition Support Pharmacist Recertification"));
        test_test.appendChild(set_options("Board Certified Oncology Pharmacist Recertification"));
        test_test.appendChild(set_options("Board Certified Oncology Pharmacist"));
        test_test.appendChild(set_options("Board Certified Pediatric Pharmacy Specialist"));
        test_test.appendChild(set_options("Board Certified Pediatric Pharmacy Specialist Recert"));
        test_test.appendChild(set_options("Board Certified Pharmacotherapy Specialist"));
        test_test.appendChild(set_options("Board Certified Pharmacotherapy Specialist Recertification"));
        test_test.appendChild(set_options("Board Certified Psychiatric Pharmacist"));
        test_test.appendChild(set_options("Board Certified Psychiatric Pharmacist Recertification"));
        test_test.appendChild(set_options("Board Certified Sterile Compounding Pharmacist"));
    }
    else if (event.target.value == "CA Engineers, Land Surveyors and Geologists") {
        test_test.appendChild(set_options("California Civil Engineering Surveying Exam"));
        test_test.appendChild(set_options("California Civil Seismic Principles Examination"));
        test_test.appendChild(set_options("California Professional Land Surveyor Exam"));
        test_test.appendChild(set_options("California Specific Examination for Professional Geologists"));
        test_test.appendChild(set_options("California Traffic Engineer Exam"));
        test_test.appendChild(set_options("Certified Engineering Geologist"));
        test_test.appendChild(set_options("Certified Hydrogeologist"));
        test_test.appendChild(set_options("Civil Engineer Surveying Beta"));
        test_test.appendChild(set_options("Civil Seismic Principles Beta"));
        test_test.appendChild(set_options("Geotechnical Exam"));
        test_test.appendChild(set_options("PROFESSIONAL Geologist - Field Test"));
        test_test.appendChild(set_options("Professional Geophysicist"));
    }
    else if (event.target.value == "Canadian Alliance of Physiotherapy Regulators") {
        test_test.appendChild(set_options("L'examen de comp??tence en physioth??rapie - Composante ??crite"));
        test_test.appendChild(set_options("Physiotherapy Competency Examination - Written Component"));
    }
    else if (event.target.value == "Canadian Alliance of Physiotherapy Regulators Practice Exams") {
        test_test.appendChild(set_options("L'examen de pr??paration ?? la composante ??crite de l'ECP"));
        test_test.appendChild(set_options("Written Component - Practice Exam"));
    }

    else if (event.target.value == "Canadian Society for Medical Laboratory Science") {
        test_test.appendChild(set_options("Clinical Genetics French"));
        test_test.appendChild(set_options("Clinical Gentics"));
        test_test.appendChild(set_options("Diagnostic Cytology"));
        test_test.appendChild(set_options("Diagnostic Cytology French"));
        test_test.appendChild(set_options("Medical Laboratory Assistant"));
        test_test.appendChild(set_options("Medical Laboratory Assistant- French"));
        test_test.appendChild(set_options("Medical Laboratory Technologist General"));
        test_test.appendChild(set_options("Medical Laboratory Technologist General French"));
    }
    else if (event.target.value == "CSMLS Exam Demo") {
        test_test.appendChild(set_options("CSMLS Exam Demo"));
    }
    else if (event.target.value == "Catalyst Futures Systematic Trading") {
        test_test.appendChild(set_options("Catalyst Futures Systematic Trading Level I"));
        test_test.appendChild(set_options("Catalyst Futures Systematic Trading Level II"));
    }
    else if (event.target.value == "CDCA-WREB-CITA") {
        test_test.appendChild(set_options("Dental Hygiene CSCE OSCE"));
        test_test.appendChild(set_options("Dental Hygiene Laws and Rules"));
        test_test.appendChild(set_options("Dental Laws and Rules"));
        test_test.appendChild(set_options("Dental Therapy OSCE"));
        test_test.appendChild(set_options("Diagnostic Skills Exam OSCE"));
        test_test.appendChild(set_options("LOCAL ANESTHESIA EXAM"));
        test_test.appendChild(set_options("NITROUS OXIDE EXAM"));
        test_test.appendChild(set_options("Sedation: Deep/GA"));
        test_test.appendChild(set_options("Sedation: Minimal"));
        test_test.appendChild(set_options("Sedation: Moderate"));
        test_test.appendChild(set_options("Sedation: Pediatric"));

    }
    else if (event.target.value == "CDISC Certification") {
        test_test.appendChild(set_options("Clinical Data Interchange Standards Consortium Tabulate"));
    }
    else if (event.target.value == "Certible") {
        test_test.appendChild(set_options("IREB CPRE Foundation Level - Chinese"));
        test_test.appendChild(set_options("IREB CPRE Foundation Level - Dutch"));
        test_test.appendChild(set_options("IREB CPRE Foundation Level - English"));
        test_test.appendChild(set_options("IREB CPRE Foundation Level - French"));
        test_test.appendChild(set_options("IREB CPRE Foundation Level - German"));
        test_test.appendChild(set_options("IREB CPRE Foundation Level - Portuguese"));
        test_test.appendChild(set_options("IREB CPRE Foundation Level - Spanish"));
        test_test.appendChild(set_options("IREB CPRE RE@Agile Primer - English"));
        test_test.appendChild(set_options("IREB CPRE RE@Agile Primer German"));
        test_test.appendChild(set_options("IREB CPRE-AL Elicitation and Consolidation"));
        test_test.appendChild(set_options("IREB CPRE-AL Elicitation and Consolidation - German"));
        test_test.appendChild(set_options("IREB CPRE-AL Requirements Management - German"));
        test_test.appendChild(set_options("IREB CPRE-AL Requirements Modeling - English"));
        test_test.appendChild(set_options("IREB CPRE-AL Requirements Modeling - German"));
        test_test.appendChild(set_options("UXQB CPUX Foundation Level - English"));
        test_test.appendChild(set_options("UXQB CPUX Foundation Level - French"));
        test_test.appendChild(set_options("UXQB CPUX Foundation Level - German"));
        test_test.appendChild(set_options("iSAQB CPSA Foundation Level - English"));
        test_test.appendChild(set_options("iSAQB CPSA Foundation Level - German"));
    }
    else if (event.target.value == "Certible Certification") {
        test_test.appendChild(set_options("Certible Certification Exam"));
        test_test.appendChild(set_options("Certible Certification Examination"));
    }
    else if (event.target.value == "Certified Customer Experience Professional") {
        test_test.appendChild(set_options("Certified Customer Experience Professional"));
    }
    else if (event.target.value == "Edinburgh Whisky Academy") {
        test_test.appendChild(set_options("Introduction to Whisky Certificate"));
    }
    else if (event.target.value == "Certification Board of Infection Control and Epidemiology") {
        test_test.appendChild(set_options("A-IPC BETA EXAM"));
        test_test.appendChild(set_options("Associates in Infection Prevention and Control"));
        test_test.appendChild(set_options("Certification In Infection Control"));
        test_test.appendChild(set_options("Certification in Infection Contol French"));
        test_test.appendChild(set_options("Long Term Care"));

    }
    else if (event.target.value == "Certification Commission for Healthcare Interpreters") {
        test_test.appendChild(set_options("Certified Healthcare Interpreter (CHI) - Arabic"));
        test_test.appendChild(set_options("Certified Healthcare Interpreter (CHI) - Mandarin"));
        test_test.appendChild(set_options("Certified Healthcare Interpreter (CHI) - Spanish"));
        test_test.appendChild(set_options("Core Certification Healthcare Interpreter"));
        test_test.appendChild(set_options("English-to-English Interpreting Examination"));
    }
    else if (event.target.value == "ETOE Interpret") {
        ETOE_Interpret();
    }
    else if (event.target.value == "Certified Financial Planner") {
        test_test.appendChild(set_options("CFP Testing Accommodations Exam"));
        test_test.appendChild(set_options("Certified Financial Planner"));
    }
    else if (event.target.value == "Certificate in Investment Performance Measurement (CIPM)") {
        test_test.appendChild(set_options("CIPM Level I"));
        test_test.appendChild(set_options("CIPM Level II"));
    }
    else if (event.target.value == "CFA Program") {
        test_test.appendChild(set_options("CFA Level I"));
        test_test.appendChild(set_options("CFA Level II"));
        test_test.appendChild(set_options("CFA Level III"));
    }
    else if (event.target.value == "ESG") {
        test_test.appendChild(set_options("Certificate in ESG Investing"));
    }

    else if (event.target.value == "ESG Investing TEST DRIVE") {
        test_test.appendChild(set_options("ESG Investing TEST DRIVE - This is not the real exam"));
    }
    else if (event.target.value == "Financial Data Professional") {
        test_test.appendChild(set_options("FDP Demo Exam"));
        test_test.appendChild(set_options("Financial Data Professional"));
    }
    else if (event.target.value == "Propel Client Success") {
        test_test.appendChild(set_options("Propel Client Success"));
    }
    else if (event.target.value == "CMT Association") {
        test_test.appendChild(set_options("Chartered Market Technician - Level I"));
        test_test.appendChild(set_options("Chartered Market Technician - Level II"));
        test_test.appendChild(set_options("Chartered Market Technician - Level III"));
    }
    else if (event.target.value == "American Board of Certification (CMT)") {
        test_test.appendChild(set_options("Dummy"));
        test_test.appendChild(set_options("Second exam name example ?? PART 1"));
        test_test.appendChild(set_options("Test"));
    }
    else if (event.target.value == "Configuration Management Team") {
        test_test.appendChild(set_options("Electrocardiograph"));
        test_test.appendChild(set_options("Pediatric Surgery"));
        test_test.appendChild(set_options("Radiography Technician"));
        test_test.appendChild(set_options("Sterilization Health Assistant"));
        test_test.appendChild(set_options("Sterilization Specialist"));
    }
    else if (event.target.value == "College Board - AP Exams (India)") {
        test_test.appendChild(set_options("AP Art History"));
        test_test.appendChild(set_options("AP Biology"));
        test_test.appendChild(set_options("AP Calculus AB"));
        test_test.appendChild(set_options("AP Calculus BC"));
        test_test.appendChild(set_options("AP Chemistry"));
        test_test.appendChild(set_options("AP Comparative Government and Politics"));
        test_test.appendChild(set_options("AP Computer Science A"));
        test_test.appendChild(set_options("AP Computer Science Principles"));
        test_test.appendChild(set_options("AP English Language and Composition"));
        test_test.appendChild(set_options("AP English Literature and Composition"));
        test_test.appendChild(set_options("AP Environmental Science"));
        test_test.appendChild(set_options("AP European History"));
        test_test.appendChild(set_options("AP Human Geography"));
        test_test.appendChild(set_options("AP Macroeconomics"));
        test_test.appendChild(set_options("AP Microeconomics"));
        test_test.appendChild(set_options("AP Physics 1: Algebra-Based"));
        test_test.appendChild(set_options("AP Physics 2: Algebra-Based"));
        test_test.appendChild(set_options("AP Physics C: Electricity and Magnetism"));
        test_test.appendChild(set_options("AP Physics C: Mechanics"));
        test_test.appendChild(set_options("AP Psychology"));
        test_test.appendChild(set_options("AP Statistics"));
        test_test.appendChild(set_options("AP United States Government and Politics"));
        test_test.appendChild(set_options("AP United States History"));
        test_test.appendChild(set_options("AP World History: Modern"));
    }
    else if (event.target.value == "College Board - AP Exams (India) - Late") {
        test_test.appendChild(set_options("AP Art History"));
        test_test.appendChild(set_options("AP Biology"));
        test_test.appendChild(set_options("AP Calculus AB"));
        test_test.appendChild(set_options("AP Calculus BC"));
        test_test.appendChild(set_options("AP Chemistry"));
        test_test.appendChild(set_options("AP Comparative Government and Politics"));
        test_test.appendChild(set_options("AP Computer Science A"));
        test_test.appendChild(set_options("AP Computer Science Principles"));
        test_test.appendChild(set_options("AP English Language and Composition"));
        test_test.appendChild(set_options("AP English Literature and Composition"));
        test_test.appendChild(set_options("AP Environmental Science"));
        test_test.appendChild(set_options("AP European History"));
        test_test.appendChild(set_options("AP Human Geography"));
        test_test.appendChild(set_options("AP Macroeconomics"));
        test_test.appendChild(set_options("AP Microeconomics"));
        test_test.appendChild(set_options("AP Physics 1: Algebra-Based"));
        test_test.appendChild(set_options("AP Physics 2: Algebra-Based"));
        test_test.appendChild(set_options("AP Physics C: Electricity and Magnetism"));
        test_test.appendChild(set_options("AP Physics C: Mechanics"));
        test_test.appendChild(set_options("AP Psychology"));
        test_test.appendChild(set_options("AP Statistics"));
        test_test.appendChild(set_options("AP United States Government and Politics"));
        test_test.appendChild(set_options("AP United States History"));
        test_test.appendChild(set_options("AP World History: Modern"));
    }
    else if (event.target.value == "College Board - AP Exams (Singapore)") {
        test_test.appendChild(set_options("AP Art History"));
        test_test.appendChild(set_options("AP Biology"));
        test_test.appendChild(set_options("AP Calculus AB"));
        test_test.appendChild(set_options("AP Calculus BC"));
        test_test.appendChild(set_options("AP Chemistry"));
        test_test.appendChild(set_options("AP Comparative Government and Politics"));
        test_test.appendChild(set_options("AP Computer Science A"));
        test_test.appendChild(set_options("AP Computer Science Principles"));
        test_test.appendChild(set_options("AP English Language and Composition"));
        test_test.appendChild(set_options("AP English Literature and Composition"));
        test_test.appendChild(set_options("AP Environmental Science"));
        test_test.appendChild(set_options("AP European History"));
        test_test.appendChild(set_options("AP Human Geography"));
        test_test.appendChild(set_options("AP Macroeconomics"));
        test_test.appendChild(set_options("AP Microeconomics"));
        test_test.appendChild(set_options("AP Physics 1: Algebra-Based"));
        test_test.appendChild(set_options("AP Physics 2: Algebra-Based"));
        test_test.appendChild(set_options("AP Physics C: Electricity and Magnetism"));
        test_test.appendChild(set_options("AP Physics C: Mechanics"));
        test_test.appendChild(set_options("AP Psychology"));
        test_test.appendChild(set_options("AP Statistics"));
        test_test.appendChild(set_options("AP United States Government and Politics"));
        test_test.appendChild(set_options("AP United States History"));
        test_test.appendChild(set_options("AP World History: Modern"));
    }
    else if (event.target.value == "College Board - AP Exams (Singapore) - Late") {
        test_test.appendChild(set_options("AP Art History"));
        test_test.appendChild(set_options("AP Biology"));
        test_test.appendChild(set_options("AP Calculus AB"));
        test_test.appendChild(set_options("AP Calculus BC"));
        test_test.appendChild(set_options("AP Chemistry"));
        test_test.appendChild(set_options("AP Comparative Government and Politics"));
        test_test.appendChild(set_options("AP Computer Science A"));
        test_test.appendChild(set_options("AP Computer Science Principles"));
        test_test.appendChild(set_options("AP English Language and Composition"));
        test_test.appendChild(set_options("AP English Literature and Composition"));
        test_test.appendChild(set_options("AP Environmental Science"));
        test_test.appendChild(set_options("AP European History"));
        test_test.appendChild(set_options("AP Human Geography"));
        test_test.appendChild(set_options("AP Macroeconomics"));
        test_test.appendChild(set_options("AP Microeconomics"));
        test_test.appendChild(set_options("AP Physics 1: Algebra-Based"));
        test_test.appendChild(set_options("AP Physics 2: Algebra-Based"));
        test_test.appendChild(set_options("AP Physics C: Electricity and Magnetism"));
        test_test.appendChild(set_options("AP Physics C: Mechanics"));
        test_test.appendChild(set_options("AP Psychology"));
        test_test.appendChild(set_options("AP Statistics"));
        test_test.appendChild(set_options("AP United States Government and Politics"));
        test_test.appendChild(set_options("AP United States History"));
        test_test.appendChild(set_options("AP World History: Modern"));
    }
    else if (event.target.value == "College of Family Physicians of Canada") {
        test_test.appendChild(set_options("Certification Examination in Family Medicine (English)"));
        test_test.appendChild(set_options("Examination of Added Competence in Emergency Medicine"));
        test_test.appendChild(set_options("L'Examen de comp??tence additionnelle en m??decine d'urgence"));
        test_test.appendChild(set_options("L'examen de certification en m??decine familiale"));
    }

    else if (event.target.value == "Remote Compatibility Check") {
        test_test.appendChild(set_options("Remote Proctoring Compatibility Check"));
        test_test.appendChild(set_options("V??rification de compatibilit?? de la surveillance ?? distance"));
    }
    else if (event.target.value == "COLLEGE OF PHARMACISTS OF BRITISH COLUMBIA") {
        test_test.appendChild(set_options("JURISPRUDENCE EXAM"));
    }
    else if (event.target.value == "Commission for Case Managers Certification") {
        test_test.appendChild(set_options("Certified Case Manager Examination"));
    }
    else if (event.target.value == "Confluent") {
        test_test.appendChild(set_options("Confluent Certified Administrator for Apache  Kafka"));
        test_test.appendChild(set_options("Confluent Certified Developer for Apache  Kafka"));
    }
    else if (event.target.value == "Connecticut Department of Public Health") {
        test_test.appendChild(set_options("Knowledge (Oral) Test"));
        test_test.appendChild(set_options("Knowledge (Written) Test"));
    }
    else if (event.target.value == "Construction Specifications Institute") {
        test_test.appendChild(set_options("Certified Construction Contract Administrator"));
        test_test.appendChild(set_options("Certified Construction Product Representative"));
        test_test.appendChild(set_options("Certified Construction Specifier"));
        test_test.appendChild(set_options("Construction Documents Technologist"));
    }
    else if (event.target.value == "Contractor Workforce Qualification Assurance Program") {
        test_test.appendChild(set_options("CWQAP Electrician"));
        test_test.appendChild(set_options("CWQAP HVAC Technician Exam"));
        test_test.appendChild(set_options("CWQAP Instrumentation Exam"));
        test_test.appendChild(set_options("CWQAP Machinist Exam"));
        test_test.appendChild(set_options("CWQAP Metals Fabricator Exam"));
        test_test.appendChild(set_options("CWQAP Metals Pipefitter Exam"));
    }
    else if (event.target.value == "Council of Interstate Testing Agencies") {
        test_test.appendChild(set_options("Computer Simulated Clinical Examination"));
        test_test.appendChild(set_options("Diagnostic Skills Exam"));
    }
    else if (event.target.value == "Council on Licensure, Enforcement and Regulation") {
        test_test.appendChild(set_options("NCIT Basic Exam"));
        test_test.appendChild(set_options("NCIT Specialized Exam"));
    }
    else if (event.target.value == "Department of Healthcare Professions - MOPH - State of Qatar") {
        test_test.appendChild(set_options("Anesthesia"));
        test_test.appendChild(set_options("Basic Paramedic"));
        test_test.appendChild(set_options("Cardiology"));
        test_test.appendChild(set_options("Critical Care Medicine"));
        test_test.appendChild(set_options("DERMATOLOGY"));
        test_test.appendChild(set_options("Dental Assistant"));
        test_test.appendChild(set_options("Dental Hygienist"));
        test_test.appendChild(set_options("Dental Lab Technician"));
        test_test.appendChild(set_options("Diagnostic Radiology"));
        test_test.appendChild(set_options("Dietician Exam"));
        test_test.appendChild(set_options("Emergency Medicine"));
        test_test.appendChild(set_options("Endocrinology"));
        test_test.appendChild(set_options("Family Medicine"));
        test_test.appendChild(set_options("Gastroenterology"));
        test_test.appendChild(set_options("General Dentist"));
        test_test.appendChild(set_options("General Practitioner"));
        test_test.appendChild(set_options("General Surgery"));
        test_test.appendChild(set_options("Internal Medicine"));
        test_test.appendChild(set_options("Lab Technician"));
        test_test.appendChild(set_options("Lab Technologist"));
        test_test.appendChild(set_options("Neurosurgery"));
        test_test.appendChild(set_options("Obstetrics & Gynecology"));
        test_test.appendChild(set_options("Ophthalmology"));
        test_test.appendChild(set_options("Orthopedic Surgery"));
        test_test.appendChild(set_options("Otorhinolaryngology"));
        test_test.appendChild(set_options("Paramedic"));
        test_test.appendChild(set_options("Pediatrics"));
        test_test.appendChild(set_options("Pediatrics Surgery"));
        test_test.appendChild(set_options("Pharmacist"));
        test_test.appendChild(set_options("Physiotherapist"));
        test_test.appendChild(set_options("Plastic Surgery"));
        test_test.appendChild(set_options("Psychiatry"));
        test_test.appendChild(set_options("Radiology Technician"));
        test_test.appendChild(set_options("Radiology Technologist"));
        test_test.appendChild(set_options("Registered General Nurse"));
        test_test.appendChild(set_options("Registered Midwife"));
        test_test.appendChild(set_options("Sports Medicine"));
        test_test.appendChild(set_options("Urology"));
        test_test.appendChild(set_options("Vascular Surgery"));
    }
    else if (event.target.value == "Design-Build Institute of America") {
        test_test.appendChild(set_options("Designated Design-Build Professional Exam"));
    }
    else if (event.target.value == "College Student") {
        test_test.appendChild(set_options("A History of the Vietnam War"));
        test_test.appendChild(set_options("Art of the Western World"));
        test_test.appendChild(set_options("Astronomy"));
        test_test.appendChild(set_options("Business Ethics and Society"));
        test_test.appendChild(set_options("Business Mathematics"));
        test_test.appendChild(set_options("Computing & Information Technology"));
        test_test.appendChild(set_options("Criminal Justice"));
        test_test.appendChild(set_options("Environmental Science"));
        test_test.appendChild(set_options("Ethics in America"));
        test_test.appendChild(set_options("Ethics in Technology"));
        test_test.appendChild(set_options("Foundations of Education"));
        test_test.appendChild(set_options("Fundamentals of College Algebra"));
        test_test.appendChild(set_options("Fundamentals of Counseling"));
        test_test.appendChild(set_options("Fundamentals of Cybersecurity"));
        test_test.appendChild(set_options("General Anthropology"));
        test_test.appendChild(set_options("Health & Human Development"));
        test_test.appendChild(set_options("History of the Soviet Union"));
        test_test.appendChild(set_options("Human Resource Management"));
        test_test.appendChild(set_options("Introduction to Business"));
        test_test.appendChild(set_options("Introduction to Geography"));
        test_test.appendChild(set_options("Introduction to Geology"));
        test_test.appendChild(set_options("Introduction to Law Enforcement"));
        test_test.appendChild(set_options("Introduction to World Religions"));
        test_test.appendChild(set_options("Lifespan Development Psychology"));
        test_test.appendChild(set_options("Management Information Systems"));
        test_test.appendChild(set_options("Math for Liberal Arts"));
        test_test.appendChild(set_options("Money and Banking"));
        test_test.appendChild(set_options("Organizational Behavior"));
        test_test.appendChild(set_options("Personal Finance"));
        test_test.appendChild(set_options("Principals of Advanced English Composition"));
        test_test.appendChild(set_options("Principals of Statistics"));
        test_test.appendChild(set_options("Principles of Finance"));
        test_test.appendChild(set_options("Principles of Supervision"));
        test_test.appendChild(set_options("Substance Abuse"));
        test_test.appendChild(set_options("Technical Writing"));
        test_test.appendChild(set_options("The Civil War and Reconstruction"));
    }
    else if (event.target.value == "DANTES") {
        test_test.appendChild(set_options("A History of the Vietnam War"));
        test_test.appendChild(set_options("Art of the Western World"));
        test_test.appendChild(set_options("Astronomy"));
        test_test.appendChild(set_options("Business Ethics and Society"));
        test_test.appendChild(set_options("Business Mathematics"));
        test_test.appendChild(set_options("Computing & Information Technology"));
        test_test.appendChild(set_options("Criminal Justice"));
        test_test.appendChild(set_options("Environmental Science"));
        test_test.appendChild(set_options("Ethics in America"));
        test_test.appendChild(set_options("Ethics in Technology"));
        test_test.appendChild(set_options("Foundations of Education"));
        test_test.appendChild(set_options("Fundamentals of College Algebra"));
        test_test.appendChild(set_options("Fundamentals of Counseling"));
        test_test.appendChild(set_options("Fundamentals of Cybersecurity"));
        test_test.appendChild(set_options("General Anthropology"));
        test_test.appendChild(set_options("Health & Human Development"));
        test_test.appendChild(set_options("History of the Soviet Union"));
        test_test.appendChild(set_options("Human Resource Management"));
        test_test.appendChild(set_options("Introduction to Business"));
        test_test.appendChild(set_options("Introduction to Geography"));
        test_test.appendChild(set_options("Introduction to Geology"));
        test_test.appendChild(set_options("Introduction to Law Enforcement"));
        test_test.appendChild(set_options("Introduction to World Religions"));
        test_test.appendChild(set_options("Lifespan Development Psychology"));
        test_test.appendChild(set_options("Management Information Systems"));
        test_test.appendChild(set_options("Math for Liberal Arts"));
        test_test.appendChild(set_options("Money and Banking"));
        test_test.appendChild(set_options("Organizational Behavior"));
        test_test.appendChild(set_options("Personal Finance"));
        test_test.appendChild(set_options("Principals of Advanced English Composition"));
        test_test.appendChild(set_options("Principals of Statistics"));
        test_test.appendChild(set_options("Principles of Finance"));
        test_test.appendChild(set_options("Principles of Supervision"));
        test_test.appendChild(set_options("Substance Abuse"));
        test_test.appendChild(set_options("Technical Writing"));
        test_test.appendChild(set_options("The Civil War and Reconstruction"));
    }
    else if (event.target.value == "Dubai Health Authority") {
        test_test.appendChild(set_options("Aesthetic/Beauty Therapy"));
        test_test.appendChild(set_options("Anatomical Pathology"));
        test_test.appendChild(set_options("Anesthesia"));
        test_test.appendChild(set_options("Anesthesia Technician"));
        test_test.appendChild(set_options("Assistant Nurse"));
        test_test.appendChild(set_options("Audiology"));
        test_test.appendChild(set_options("Cardiology"));
        test_test.appendChild(set_options("Cardiothoracic Surgery"));
        test_test.appendChild(set_options("Clinical Biochemistry"));
        test_test.appendChild(set_options("Clinical Biochemistry - Allied"));
        test_test.appendChild(set_options("Clinical pathology"));
        test_test.appendChild(set_options("Clinical psychology"));
        test_test.appendChild(set_options("Community Medicine"));
        test_test.appendChild(set_options("Dental Assistant"));
        test_test.appendChild(set_options("Dental Hygiene"));
        test_test.appendChild(set_options("Dental Lab Technician"));
        test_test.appendChild(set_options("Dermatologist"));
        test_test.appendChild(set_options("Dermatology Consultant"));
        test_test.appendChild(set_options("Diagnostic Radiology"));
        test_test.appendChild(set_options("Dietetics and Nutrition"));
        test_test.appendChild(set_options("Electrocardiograph"));
        test_test.appendChild(set_options("Emergency Medicine"));
        test_test.appendChild(set_options("Endocrinology"));
        test_test.appendChild(set_options("Endodontic"));
        test_test.appendChild(set_options("Family Medicine Consultant"));
        test_test.appendChild(set_options("Family medicine"));
        test_test.appendChild(set_options("Forensic Medicine"));
        test_test.appendChild(set_options("Gastroenterology Doctor"));
        test_test.appendChild(set_options("General Dentistry"));
        test_test.appendChild(set_options("General Practice"));
        test_test.appendChild(set_options("Hematopathology"));
        test_test.appendChild(set_options("Implantology"));
        test_test.appendChild(set_options("Intensive Care"));
        test_test.appendChild(set_options("Internal Medicin"));
        test_test.appendChild(set_options("Internal Medicine Consultant"));
        test_test.appendChild(set_options("Lab Technician"));
        test_test.appendChild(set_options("Massage Therapy"));
        test_test.appendChild(set_options("Medical Laboratory Technology"));
        test_test.appendChild(set_options("Medical Microbiology"));
        test_test.appendChild(set_options("Medical Technology(Heamatology)"));
        test_test.appendChild(set_options("Microbiology technologist"));
        test_test.appendChild(set_options("Midwifery"));
        test_test.appendChild(set_options("Nephrology"));
        test_test.appendChild(set_options("Neurosurgery"));
        test_test.appendChild(set_options("Nurology"));
        test_test.appendChild(set_options("Nursing Exam"));
        test_test.appendChild(set_options("Obstetrics & Gynaecology"));
        test_test.appendChild(set_options("Occupational Therapist"));
        test_test.appendChild(set_options("Optometrist"));
        test_test.appendChild(set_options("Oral & Maxillofacial Surgery"));
        test_test.appendChild(set_options("Oral Surgery"));
        test_test.appendChild(set_options("Orthodontics"));
        test_test.appendChild(set_options("Otolaryngology"));
        test_test.appendChild(set_options("Pediatric Dentistry"));
        test_test.appendChild(set_options("Pediatric Surgery"));
        test_test.appendChild(set_options("Pediatrics Consultant"));
        test_test.appendChild(set_options("Perfusionist"));
        test_test.appendChild(set_options("Periodontics"));
        test_test.appendChild(set_options("Pharmacist"));
        test_test.appendChild(set_options("Pharmacy Technician"));
        test_test.appendChild(set_options("Physical Medicine and Rehabilitation"));
        test_test.appendChild(set_options("Physiotherapist"));
        test_test.appendChild(set_options("Physiotherapy Technician"));
        test_test.appendChild(set_options("Plastic Surgery"));
        test_test.appendChild(set_options("Prosthetics & Orthotics"));
        test_test.appendChild(set_options("Prosthodontics"));
        test_test.appendChild(set_options("Psychiatry"));
        test_test.appendChild(set_options("Radiographer"));
        test_test.appendChild(set_options("Radiography Technician"));
        test_test.appendChild(set_options("Radiologist"));
        test_test.appendChild(set_options("Renal Dialysis Technician"));
        test_test.appendChild(set_options("Respiratory Technician"));
        test_test.appendChild(set_options("Restorative Dentistry"));
        test_test.appendChild(set_options("Rheumatologist"));
        test_test.appendChild(set_options("Specialist General Surgery"));
        test_test.appendChild(set_options("Specialist Ophthalmology"));
        test_test.appendChild(set_options("Specialist Orthopedic Surgery"));
        test_test.appendChild(set_options("Specialist Pediatrics"));
        test_test.appendChild(set_options("Specialist Pulmonary Disease"));
        test_test.appendChild(set_options("Sport Medicine"));
        test_test.appendChild(set_options("Sterilization Health Assistant"));
        test_test.appendChild(set_options("Sterilization Technician"));
        test_test.appendChild(set_options("Urology"));
        test_test.appendChild(set_options("Vascular Surgery"));

    }
    else if (event.target.value == "Dubai Health Care City Authority") {
        test_test.appendChild(set_options("Anesthesia"));
        test_test.appendChild(set_options("Assistant Pharmacist"));
        test_test.appendChild(set_options("Cardiology"));
        test_test.appendChild(set_options("Clinical Pathology"));
        test_test.appendChild(set_options("Dental Assistant"));
        test_test.appendChild(set_options("Dental Hygienest"));
        test_test.appendChild(set_options("Dermatology"));
        test_test.appendChild(set_options("Diagnostic Radiology"));
        test_test.appendChild(set_options("Emergency Medicine"));
        test_test.appendChild(set_options("Endocrinology Exam"));
        test_test.appendChild(set_options("Endodontics"));
        test_test.appendChild(set_options("Family Medicine"));
        test_test.appendChild(set_options("Gastroenterology"));
        test_test.appendChild(set_options("General Dentistry"));
        test_test.appendChild(set_options("General Medicine"));
        test_test.appendChild(set_options("General Surgery"));
        test_test.appendChild(set_options("Intensive Care"));
        test_test.appendChild(set_options("Internal Medicine"));
        test_test.appendChild(set_options("Medical Lab Technology"));
        test_test.appendChild(set_options("Medical Laboratory Technology assistant"));
        test_test.appendChild(set_options("Medical Microbiology"));
        test_test.appendChild(set_options("Midwifery"));
        test_test.appendChild(set_options("Nurse Assistant"));
        test_test.appendChild(set_options("Nurse licensing exam"));
        test_test.appendChild(set_options("Nutrition"));
        test_test.appendChild(set_options("Obstetrics & Gynecology"));
        test_test.appendChild(set_options("Occupational Therapy Specialist"));
        test_test.appendChild(set_options("Ophthalmology"));
        test_test.appendChild(set_options("Oral Maxilliofacial Surgery"));
        test_test.appendChild(set_options("Orthodontics & Dentofacial Orthopedics"));
        test_test.appendChild(set_options("Orthopedic Surgery"));
        test_test.appendChild(set_options("Otolaryngology"));
        test_test.appendChild(set_options("Pediatrics"));
        test_test.appendChild(set_options("Pedodontics"));
        test_test.appendChild(set_options("Periodontics"));
        test_test.appendChild(set_options("Pharmacy"));
        test_test.appendChild(set_options("Physical Therapy"));
        test_test.appendChild(set_options("Physical Therapy Assistant"));
        test_test.appendChild(set_options("Plastic Surgery"));
        test_test.appendChild(set_options("Prosthodontics"));
        test_test.appendChild(set_options("Psychiatry"));
        test_test.appendChild(set_options("Psychology"));
        test_test.appendChild(set_options("Pulmonology Medicine"));
        test_test.appendChild(set_options("Radiology Technologist"));
        test_test.appendChild(set_options("Registered Nurse"));
        test_test.appendChild(set_options("Respiratory Therapist"));
        test_test.appendChild(set_options("Rheumatology"));
        test_test.appendChild(set_options("Urology"));
    } else if (event.target.value == "ECOTEST Quality Certificates Issuing Services Program") {
        test_test.appendChild(set_options("Ecotest Pest Control Operator Test - Arabic"));
        test_test.appendChild(set_options("Ecotest Pest Control Operator Test - English"));
        test_test.appendChild(set_options("Ecotest Pest Control Supervisor Test - Arabic"));
        test_test.appendChild(set_options("Ecotest Pest Control Supervisor Test - English"));
    }
    else if (event.target.value == "Educational Records Bureau") {
        test_test.appendChild(set_options("ISEE Lower Level"));
        test_test.appendChild(set_options("ISEE Moddle Level"));
        test_test.appendChild(set_options("ISEE Upper Level"));
    }
    else if (event.target.value == "Food Managers Certification") {
        test_test.appendChild(set_options("Certified Food Manager Exam English"));
        test_test.appendChild(set_options("Certified Food Manager Exam Spanish"));
    }
    else if (event.target.value == "Elsevier") {
        test_test.appendChild(set_options("APN Adult Nurse Practitioner"));
        test_test.appendChild(set_options("APN Family Nurse Practitioner"));
        test_test.appendChild(set_options("APRN Exit Acute Care Exam"));
        test_test.appendChild(set_options("APRN Specialty Pathophysiology"));
        test_test.appendChild(set_options("APRN Specialty Pharmocotherapeutics"));
        test_test.appendChild(set_options("APRN Specialty Physical Assessment"));
        test_test.appendChild(set_options("Admission Assessment Grammar"));
        test_test.appendChild(set_options("Admission Assessment With Critical Thinking"));
        test_test.appendChild(set_options("Admissions Assessment"));
        test_test.appendChild(set_options("Custom 100 Question Exam"));
        test_test.appendChild(set_options("Custom 20 Question Exam"));
        test_test.appendChild(set_options("Custom 50 Question Exam"));
        test_test.appendChild(set_options("Custom 75 Question Exam"));
        test_test.appendChild(set_options("Developmental Dis Nursing Assoc Licensed Practical Nurse"));
        test_test.appendChild(set_options("Developmental Disabilities Nursing Assoc. Registered Nurse"));
        test_test.appendChild(set_options("HP Advanced EMT Exit Exam V1"));
        test_test.appendChild(set_options("HP Dental Assisting Exit Exam V1"));
        test_test.appendChild(set_options("HP Dental Hygiene Exit Exam V1"));
        test_test.appendChild(set_options("HP Dental Hygiene Exit Exam V2"));
        test_test.appendChild(set_options("HP Dental Hygiene Exit Exam V2"));
        test_test.appendChild(set_options("HP EMT Exit Exam V1"));
        test_test.appendChild(set_options("HP EMT Exit Exam V2"));
        test_test.appendChild(set_options("HP Massage Therapy Exit Exam MBLEX V1"));
        test_test.appendChild(set_options("HP Massage Therapy Exit Exam MBLEX V2"));
        test_test.appendChild(set_options("HP Massage Therapy Exit Exam MBLEX V3"));
        test_test.appendChild(set_options("HP Massage Therapy Exit Exam NCETMB  V1"));
        test_test.appendChild(set_options("HP Massage Therapy Exit Exam NCETMB  V2"));
        test_test.appendChild(set_options("HP Massage Therapy Exit Exam NCETMB  V3"));
        test_test.appendChild(set_options("HP Medical Assisting Exit Exam V1"));
        test_test.appendChild(set_options("HP Medical Assisting Exit Exam V2"));
        test_test.appendChild(set_options("HP Respiratory Care Exit Exam V1"));
        test_test.appendChild(set_options("HP Veterinary Technology Exit Exam V1"));
        test_test.appendChild(set_options("Health Profession Admission Assessment Version 1"));
        test_test.appendChild(set_options("Health Profession Admission Assessment Version 2"));
        test_test.appendChild(set_options("Health Professions Paramedic"));
        test_test.appendChild(set_options("Health Professions Radiology"));
        test_test.appendChild(set_options("International RN Admission Assessment Version One"));
        test_test.appendChild(set_options("Medical Office Administration Exit Exam V1"));
        test_test.appendChild(set_options("PN Admission Assessment Version 1"));
        test_test.appendChild(set_options("PN Admission Assessment Version 2"));
        test_test.appendChild(set_options("PN Admission Assessment with Critical Thinking Version 1"));
        test_test.appendChild(set_options("PN Admission Assessment with Critical Thinking Version 2"));
        test_test.appendChild(set_options("PN Exit Exam Version 1"));
        test_test.appendChild(set_options("PN Exit Exam Version 2"));
        test_test.appendChild(set_options("PN Exit Exam Version 3"));
        test_test.appendChild(set_options("Practical Nurse Exit Exam"));
        test_test.appendChild(set_options("Practical Nursing Critical Thinking Test"));
        test_test.appendChild(set_options("Practical Nursing Fundamentals"));
        test_test.appendChild(set_options("Practical Nursing Maternity"));
        test_test.appendChild(set_options("Practical Nursing Maternity & Pediatric"));
        test_test.appendChild(set_options("Practical Nursing Med/Surg"));
        test_test.appendChild(set_options("Practical Nursing Pediatric"));
        test_test.appendChild(set_options("Practical Nursing Pharmacology"));
        test_test.appendChild(set_options("Practical Nursing Psy/Mental Health"));
        test_test.appendChild(set_options("RN Admission Assessment Version 1"));
        test_test.appendChild(set_options("RN Admission Assessment Version 2"));
        test_test.appendChild(set_options("RN Admission Assessment with Critical Thinking Version 1"));
        test_test.appendChild(set_options("RN Admission Assessment with Critical Thinking Version 2"));
        test_test.appendChild(set_options("RN Entrance EMS-ADN Exam"));
        test_test.appendChild(set_options("RN Exit Exam Version 1"));
        test_test.appendChild(set_options("RN Exit Exam Version 2"));
        test_test.appendChild(set_options("RN Exit Exam Version 3"));
        test_test.appendChild(set_options("RN Exit Exam Version 4"));
        test_test.appendChild(set_options("RN Exit Exam Version 5"));
        test_test.appendChild(set_options("RN Exit Exam Version 6"));
        test_test.appendChild(set_options("RN Exit Exam Version 7"));
        test_test.appendChild(set_options("Registered Nurse Exit Exam"));
        test_test.appendChild(set_options("Registered Nursing Biology Entrance Exam"));
        test_test.appendChild(set_options("Registered Nursing Community Health"));
        test_test.appendChild(set_options("Registered Nursing Critical Care"));
        test_test.appendChild(set_options("Registered Nursing Critical Thinking Test"));
        test_test.appendChild(set_options("Registered Nursing Fundamentals"));
        test_test.appendChild(set_options("Registered Nursing Gerontology"));
        test_test.appendChild(set_options("Registered Nursing Health Assessment"));
        test_test.appendChild(set_options("Registered Nursing Management"));
        test_test.appendChild(set_options("Registered Nursing Management/Community Health"));
        test_test.appendChild(set_options("Registered Nursing Maternity"));
        test_test.appendChild(set_options("Registered Nursing Maternity & Pediatric"));
        test_test.appendChild(set_options("Registered Nursing Med/Surg"));
        test_test.appendChild(set_options("Registered Nursing Nutritional"));
        test_test.appendChild(set_options("Registered Nursing PN-ADN"));
        test_test.appendChild(set_options("Registered Nursing Pathophysiology"));
        test_test.appendChild(set_options("Registered Nursing Pediatric"));
        test_test.appendChild(set_options("Registered Nursing Pharmacology"));
        test_test.appendChild(set_options("Registered Nursing Psy/Mental Health"));
        test_test.appendChild(set_options("Registered Nursing RN-BSN"));
        test_test.appendChild(set_options("Registered Nursing Research"));
    }
    else if (event.target.value == "GACE ParaProfessional") {
        test_test.appendChild(set_options("GACE ParaProfessional"));
    }
    else if (event.target.value == "ParaPro") {
        test_test.appendChild(set_options("ParaPro"));
    }
    else if (event.target.value == "389/21(AD6) - field of sustainable agriculture + rural devel") {
        test_test.appendChild(set_options("EPSO/AD/389/21"));
        test_test.appendChild(set_options("EPSO/AD/389/21"));
    }
    else if (event.target.value == "CAST JRC") {
        test_test.appendChild(set_options("COM/1/2015/GFIV"));
        test_test.appendChild(set_options("COM/1/2015/GFIV"));
        test_test.appendChild(set_options("COM/1/2015/GFIV"));
    }
    else if (event.target.value == "COM/AD/01/20 Internal Competition") {
        test_test.appendChild(set_options("COM/AD/01/20"));
        test_test.appendChild(set_options("COM/AD/01/20"));
    }
    else if (event.target.value == "COM/AD/02/21 Internal Competition AD5") {
        test_test.appendChild(set_options("COM/AD/02/21"));
        test_test.appendChild(set_options("COM/AD/02/21"));
        test_test.appendChild(set_options("COM/AD/02/21"));
    }
    else if (event.target.value == "COM/TA/AD/01-04/21 Translators") {
        test_test.appendChild(set_options("COM/TA/AD/01-04/21"));
        test_test.appendChild(set_options("COM/TA/AD/01-04/21"));
        test_test.appendChild(set_options("COM/TA/AD/01-04/21"));
        test_test.appendChild(set_options("COM/TA/AD/01-04/21"));
    }
    else if (event.target.value == "COM/TA/AD01-AD04/21") {
        test_test.appendChild(set_options("COM/TA/AD01-AD04/21"));
    }
    else if (event.target.value == "EPSO Certification Examination") {
        test_test.appendChild(set_options("Examen ??crit, E2, De La Proc??dure de Certification"));
        test_test.appendChild(set_options("Examen ??crit, E2, De La Proc??dure de Certification"));
        test_test.appendChild(set_options("Examen ??crit, E2, De La Proc??dure de Certification"));
        test_test.appendChild(set_options("Written Examination, E2, of Certification Procedure"));
        test_test.appendChild(set_options("Written Examination, E2, of Certification Procedure"));
        test_test.appendChild(set_options("Written Examination, E2, of Certification Procedure"));
    }
    else if (event.target.value == "EPSO/AD/375-379/20 Lawyer Linguists") {
        test_test.appendChild(set_options("EPSO/AD/375-379/20"));
        test_test.appendChild(set_options("EPSO/AD/375-379/20"));
        test_test.appendChild(set_options("EPSO/AD/375-379/20"));
    }
    else if (event.target.value == "EPSO/AD/375-379/20 Lawyer Linguists (AD7)") {
        test_test.appendChild(set_options("EPSO/AD/375-379/20"));
    }
    else if (event.target.value == "EPSO/AD/380/19") {
        test_test.appendChild(set_options("EPSO/AD/380/19"));
        test_test.appendChild(set_options("EPSO/AD/380/19"));
    }
    else if (event.target.value == "EPSO/AD/381/20") {
        test_test.appendChild(set_options("EPSO/AD/381/20"));
        test_test.appendChild(set_options("EPSO/AD/381/20"));
        test_test.appendChild(set_options("EPSO/AD/381/20"));
    }
    else if (event.target.value == "EPSO/AD/381/20 Administrators in the field of European Law") {
        test_test.appendChild(set_options("EPSO/AD/381/20"));
        test_test.appendChild(set_options("EPSO/AD/381/20"));
    }
    else if (event.target.value == "EPSO/AD/382/20") {
        test_test.appendChild(set_options("EPSO/AD/382/20"));
        test_test.appendChild(set_options("EPSO/AD/382/20"));
    }
    else if (event.target.value == "EPSO/AD/382/20 EEAS") {
        test_test.appendChild(set_options("EPSO/AD/382/20"));
        test_test.appendChild(set_options("EPSO/AD/382/20"));
    }
    else if (event.target.value == "EPSO/AD/383-388/21 LL OT") {
        test_test.appendChild(set_options("EPSO/AD/383-388/21"));
    }
    else if (event.target.value == "EPSO/AD/383-388/21 LL OT Translation test") {
        test_test.appendChild(set_options("EPSO/AD/383/21 - Translation test"));
        test_test.appendChild(set_options("EPSO/AD/383/21 - Translation test"));
        test_test.appendChild(set_options("EPSO/AD/384/21 - Translation test"));
        test_test.appendChild(set_options("EPSO/AD/385/21 - Translation test"));
        test_test.appendChild(set_options("EPSO/AD/386/21 - Translation test"));
        test_test.appendChild(set_options("EPSO/AD/387/21 - Translation test"));
        test_test.appendChild(set_options("EPSO/AD/388/21 - Translation test"));
    }
    else if (event.target.value == "EPSO/AD/389/21 - field of sustainable agriculture + rural de") {
        test_test.appendChild(set_options("EPSO/AD/389/21"));
        test_test.appendChild(set_options("EPSO/AD/389/21"));
    }
    else if (event.target.value == "EPSO/AD/390/21 - field of chemicals policy Written Test") {
        test_test.appendChild(set_options("EPSO/AD/390/21"));
        test_test.appendChild(set_options("EPSO/AD/390/21"));
    }
    else if (event.target.value == "EPSO/AD/390/21 (AD6) - field of chemicals policy") {
        test_test.appendChild(set_options("EPSO/AD/390/21"));
        test_test.appendChild(set_options("EPSO/AD/390/21"));
    }
    else if (event.target.value == "EPSO/AD/391/21") {
        test_test.appendChild(set_options("EPSO/AD/391/21"));
        test_test.appendChild(set_options("EPSO/AD/391/21"));
    }
    else if (event.target.value == "EPSO/AD/392/21 - Administrators") {
        test_test.appendChild(set_options("EPSO/AD/392/21"));
        test_test.appendChild(set_options("EPSO/AD/392/21"));
    }
    else if (event.target.value == "EPSO/AD/392/21 - CO385") {
        test_test.appendChild(set_options("EPSO/AD/392/21"));
        test_test.appendChild(set_options("EPSO/AD/392/21"));
    }
    else if (event.target.value == "EPSO/AD/393/21 EDPS") {
        test_test.appendChild(set_options("EPSO/AD/393/21"));
        test_test.appendChild(set_options("EPSO/AD/393/21"));
    }
    else if (event.target.value == "EPSO/AD/393/21 European Data Protection Supervision (EDPS)") {
        test_test.appendChild(set_options("EPSO/AD/393/21"));
        test_test.appendChild(set_options("EPSO/AD/393/21"));
    }
    else if (event.target.value == "EPSO/AD/394-395/21") {
        test_test.appendChild(set_options("EPSO/AD/394-395/21"));
        test_test.appendChild(set_options("EPSO/AD/394-395/21"));
    }
    else if (event.target.value == "EPSO/AD/394-395/21 - Case Study") {
        test_test.appendChild(set_options("EPSO/AD/394-395/21"));
        test_test.appendChild(set_options("EPSO/AD/394-395/21"));
    }
    else if (event.target.value == "EPSO/AD/396/21") {
        test_test.appendChild(set_options("EPSO/AD/396/21"));
    }
    else if (event.target.value == "EPSO/AD/396/21 LL GA Translation") {
        test_test.appendChild(set_options("EPSO/AD/396/21 - Translation Test"));
    }
    else if (event.target.value == "EPSO/AD/397/21") {
        test_test.appendChild(set_options("EPSO/AD/397/21"));
    }
    else if (event.target.value == "EPSO/AD/398/22") {
        test_test.appendChild(set_options("EPSO/AD/398/22"));
        test_test.appendChild(set_options("EPSO/AD/398/22"));
    }
    else if (event.target.value == "EPSO/AD/399/22") {
        test_test.appendChild(set_options("EPSO/AD/399/22"));
        test_test.appendChild(set_options("EPSO/AD/399/22"));
    }
    else if (event.target.value == "EPSO/AST/148/21") {
        test_test.appendChild(set_options("EPSO/AST/148/21"));
    }
    else if (event.target.value == "EPSO/AST/149/21 Nuclear Inspectors") {
        test_test.appendChild(set_options("EPSO/AST/149/21"));
        test_test.appendChild(set_options("EPSO/AST/149/21"));
    }
    else if (event.target.value == "EPSO/AST/149/21 Nuclear Inspectors Case Study") {
        test_test.appendChild(set_options("EPSO/AST/149/21"));
        test_test.appendChild(set_options("EPSO/AST/149/21"));
    }
    else if (event.target.value == "EPSO/AST/150/21") {
        test_test.appendChild(set_options("EPSO/AST/150/21"));
        test_test.appendChild(set_options("EPSO/AST/150/21"));
    }
    else if (event.target.value == "EPSO/AST/151/22") {
        test_test.appendChild(set_options("EPSO/AST/151/22"));
        test_test.appendChild(set_options("EPSO/AST/151/22"));
    }
    else if (event.target.value == "EPSO/AST/152/22") {
        test_test.appendChild(set_options("EPSO/AST/152/22"));
        test_test.appendChild(set_options("EPSO/AST/152/22"));
    }
    else if (event.target.value == "EPSO/AST/152/22 FRT") {
        test_test.appendChild(set_options("EPSO/AST/152/22"));
    }
    else if (event.target.value == "EPSO/AST/153/22") {
        test_test.appendChild(set_options("EPSO/AST/153/22"));
        test_test.appendChild(set_options("EPSO/AST/153/22"));
    }
    else if (event.target.value == "EPSO/AST/154/22 (fields: 1-2)") {
        test_test.appendChild(set_options("EPSO/AST/154/22"));
    }
    else if (event.target.value == "EPSO/AST/154/22 (fields: 3-4-5-6)") {
        test_test.appendChild(set_options("EPSO/AST/154/22"));
    }
    else if (event.target.value == "EPSO/AST/155/22") {
        test_test.appendChild(set_options("EPSO/AST/154/22"));
        test_test.appendChild(set_options("EPSO/AST/154/22"));
    }
    else if (event.target.value == "EPSO/AST-SC/10/20") {
        test_test.appendChild(set_options("EPSO/AST-SC/10/20"));
        test_test.appendChild(set_options("EPSO/AST-SC/10/20"));
    }
    else if (event.target.value == "EPSO/AST-SC/11/21") {
        test_test.appendChild(set_options("EPSO/AST-SC/11/21"));
        test_test.appendChild(set_options("EPSO/AST-SC/11/21"));
    }
    else if (event.target.value == "Junior Professionals Programme") {
        test_test.appendChild(set_options("Junior Professionals Programme"));
        test_test.appendChild(set_options("Junior Professionals Programme"));
        test_test.appendChild(set_options("Junior Professionals Programme"));
    }
    else if (event.target.value == "Events Industry Council") {
        test_test.appendChild(set_options("Certified Meeting Professional"));
        test_test.appendChild(set_options("Certified Meeting Professional-Healthcare"));
    }
    else if (event.target.value == "Eversource Energy Service Company-Contractor Employees only") {
        test_test.appendChild(set_options("1 Hour Test Session"));
        test_test.appendChild(set_options("2 Hour Test Session"));
        test_test.appendChild(set_options("3 Hour Test Session"));
        test_test.appendChild(set_options("4 Hour Test Session"));
    }
    else if (event.target.value == "Eversource Energy Service Company-Eversource Employees only") {
        test_test.appendChild(set_options("1 Hour Test Session"));
        test_test.appendChild(set_options("2 Hour Test Session"));
        test_test.appendChild(set_options("3 Hour Test Session"));
        test_test.appendChild(set_options("4 Hour Test Session"));
    }
    else if (event.target.value == "Exam Master Corporation") {
        test_test.appendChild(set_options("Physician Assistant College Admission Test"));
    }
    else if (event.target.value == "F5 Networks") {
        test_test.appendChild(set_options("101-Application Delivery Fundamentals"));
        test_test.appendChild(set_options("201-TMOS Administration"));
        test_test.appendChild(set_options("202-Pre-Sales Fundamentals"));
        test_test.appendChild(set_options("301a-BIG-IP LTM Specialist: Architect, Setup and Deploy"));
        test_test.appendChild(set_options("301b-BIG-IP LTM Specialist: Maintain and Troublshoot"));
        test_test.appendChild(set_options("302-BIG-IP DNS Specialist"));
        test_test.appendChild(set_options("303-BIG-IP ASM Specialist"));
        test_test.appendChild(set_options("304-BIG_IP APM Specialist"));
        test_test.appendChild(set_options("401-Security Solutions"));
        test_test.appendChild(set_options("402-Cloud Solutions"));
    }
    else if (event.target.value == "FINRA") {
        finra();
    }
    else if (event.target.value == "FINRA RP") {
        test_test.appendChild(set_options("1-24 General Securities Principal Examination"));
        test_test.appendChild(set_options("Direct Participation Programs Rep"));
        test_test.appendChild(set_options("Financial and Operations Principal Exam"));
        test_test.appendChild(set_options("General Securities Principal Exam - Sales Supervisor"));
        test_test.appendChild(set_options("General Securities Sales Supervisor - General"));
        test_test.appendChild(set_options("Investment Banking Rep. Exam"));
        test_test.appendChild(set_options("Investment Company and Variable Contracts Products Principal"));
        test_test.appendChild(set_options("Municipal Advisor Principal"));
        test_test.appendChild(set_options("Municipal Advisor Representative Examination"));
        test_test.appendChild(set_options("Online Demo Exam"));
        test_test.appendChild(set_options("Operations Professional Exam"));
        test_test.appendChild(set_options("Research Analyst Exam - Part I - Analysis"));
        test_test.appendChild(set_options("Research Analyst Exam - Part II - Regulatory"));
        test_test.appendChild(set_options("SERIES 4 - THE REGISTERED OPTIONS PRINCIPAL EXAMINATION"));
        test_test.appendChild(set_options("Securities Industry Essentials (SIE)"));
        test_test.appendChild(set_options("Securities Trader"));
        test_test.appendChild(set_options("Series 06 - Investment Co./Variable Contracts Rep (S6TO)"));
        test_test.appendChild(set_options("Series 07 - General Securities Rep (S7TO)"));
        test_test.appendChild(set_options("Series 09 - General Securities Sales Supervisor/Options (S9)"));
        test_test.appendChild(set_options("Series 161 - Supervisory Analyst Part I Exam (S161)"));
        test_test.appendChild(set_options("Series 162 - Supervisory Analyst Part II Exam (S162)"));
        test_test.appendChild(set_options("Series 3 - National Commodity Futures Examination"));
        test_test.appendChild(set_options("Series 30 - NFA Branch Manager Examination"));
        test_test.appendChild(set_options("Series 31 - Futures Managed Funds Examination"));
        test_test.appendChild(set_options("Series 32 - Limited Futures Exam - Regulations"));
        test_test.appendChild(set_options("Series 34 - Retail Off-Exchange Forex Examination"));
        test_test.appendChild(set_options("Series 63 - Uniform Securities Agent State Law Exam (S63)"));
        test_test.appendChild(set_options("Series 82 - Private Securities Offerings Rep"));
        test_test.appendChild(set_options("UNIFORM COMBINED STATE LAW EXAMINATION"));
        test_test.appendChild(set_options("UNIFORM INVESTMENT ADVISORS LAW EXAMINATION"));
    }
    else if (event.target.value == "NMLS RP") {
        test_test.appendChild(set_options("SAFE MLO National Test"));
    }
    else if (event.target.value == "Federation of State Boards of Physical Therapy") {
        test_test.appendChild(set_options("ALABAMA JURISPRUDENCE EXAM"));
        test_test.appendChild(set_options("ARIZONA JURISPRUDENCE EXAM"));
        test_test.appendChild(set_options("California Jurisprudence Examination"));
        test_test.appendChild(set_options("District of Columbia Jurisprudence Examination"));
        test_test.appendChild(set_options("Florida Jurisprudence Examination"));
        test_test.appendChild(set_options("GEORGIA LAW EXAM"));
        test_test.appendChild(set_options("Nebraska Jurisprudence Examination"));
        test_test.appendChild(set_options("OHIO LAW EXAM"));
        test_test.appendChild(set_options("PHYSICAL THERAPIST"));
        test_test.appendChild(set_options("PHYSICAL THERAPIST ASSISTANT"));
        test_test.appendChild(set_options("PT Scenario Pilot Exam"));
        test_test.appendChild(set_options("PTA Scenario Pilot Exam"));
    }
    else if (event.target.value == "GCC Electrical Testing Laboratory") {
        test_test.appendChild(set_options("Certified Power System Operator"));
    }
    else if (event.target.value == "GISI Professional Qualification") {
        test_test.appendChild(set_options("Corporate Finance"));
        test_test.appendChild(set_options("Investment Analysis"));
        test_test.appendChild(set_options("Risk Management"));
        test_test.appendChild(set_options("Security Trading"));
        test_test.appendChild(set_options("Wealth and Portfolio Management"));
    }
    else if (event.target.value == "Chartered Fintech Professional") {
        test_test.appendChild(set_options("Level 1A"));
        test_test.appendChild(set_options("Level 1AB Foundation"));
        test_test.appendChild(set_options("Level 1B"));
        test_test.appendChild(set_options("Level 2A"));
        test_test.appendChild(set_options("Level 2B"));
    }
    else if (event.target.value == "GBCI Test Drive") {
        test_test.appendChild(set_options("GBCI Test Drive Exam"));
    }
    else if (event.target.value == "Green Business Certification Inc") {
        test_test.appendChild(set_options("LEED AP Building Design & Construction Combined"));
        test_test.appendChild(set_options("LEED AP Building Design & Construction Stand Alone"));
        test_test.appendChild(set_options("LEED AP Homes Combined"));
        test_test.appendChild(set_options("LEED AP Homes Stand Alone"));
        test_test.appendChild(set_options("LEED AP Interior Design & Construction Combined"));
        test_test.appendChild(set_options("LEED AP Interior Design & Construction Stand Alone"));
        test_test.appendChild(set_options("LEED AP Neighborhood Development Combined"));
        test_test.appendChild(set_options("LEED AP Neighborhood Development Stand Alone"));
        test_test.appendChild(set_options("LEED AP Operations & Maintenance Combined"));
        test_test.appendChild(set_options("LEED AP Operations + Maintenance Stand Alone"));
        test_test.appendChild(set_options("LEED Green Associate"));
        test_test.appendChild(set_options("LEED Project Reviewer"));
        test_test.appendChild(set_options("SITES Accredited Professional (SITES AP)"));
        test_test.appendChild(set_options("Sustainability Excellence Associate"));
        test_test.appendChild(set_options("Sustainability Excellence Professional"));
        test_test.appendChild(set_options("Urban Greenhouse Gas Inventory Specialist"));
    }
    else if (event.target.value == "Gulf Organisation for Research & Development") {
        test_test.appendChild(set_options("Global Sustainability Assessment System"));
    }

    else if (event.target.value == "Healthcare Sterile Processing Association (Formerly IAHCSMM)") {
        test_test.appendChild(set_options("Certified Central Service Vendor Partner"));
        test_test.appendChild(set_options("Certified Endoscope Reprocessor"));
        test_test.appendChild(set_options("Certified Healthcare Leadership"));
        test_test.appendChild(set_options("Certified Instrument Specialist"));
        test_test.appendChild(set_options("Certified Registered Central Service Technician"));
    }
    else if (event.target.value == "HelloCode Master Certificate") {
        test_test.appendChild(set_options("HelloCode Python Advanced"));
        test_test.appendChild(set_options("HelloCode Python Basic"));
        test_test.appendChild(set_options("HelloCode Python Intermediate"));
        test_test.appendChild(set_options("HelloCode SMOOTHY Advanced"));
        test_test.appendChild(set_options("HelloCode SMOOTHY Basic"));
        test_test.appendChild(set_options("HelloCode SMOOTHY Intermediate"));
        test_test.appendChild(set_options("HelloCode Web Advanced"));
        test_test.appendChild(set_options("HelloCode Web Basic"));
        test_test.appendChild(set_options("HelloCode Web Intermediate"));
    }
    else if (event.target.value == "Contractor Work Permit Receiver Prerequisite") {
        test_test.appendChild(set_options("Contractor Work Permit Receiver Prerequisite"));
    }
    else if (event.target.value == "Human Resources Professional Association") {
        test_test.appendChild(set_options("CHRL Employment Law Exam"));
        test_test.appendChild(set_options("CHRL Knowledge Exam"));
        test_test.appendChild(set_options("CHRP Employment Law Exam"));
        test_test.appendChild(set_options("CHRP Knowledge Exam"));
        test_test.appendChild(set_options("Examen des connaissances du conseiller en RH agr????"));
    }
    else if (event.target.value == "HydraFacial Connect Certification") {
        test_test.appendChild(set_options("HydraFacial Connect Certification Expert Level 2 Exam"));
        test_test.appendChild(set_options("HydraFacial Connect Certification Professional Level 1 Exam"));
    } else if (event.target.value == "Institute of Certified Management Accountants") {
        test_test.appendChild(set_options("Certified in Strategy and Competitive Analysis"));
        test_test.appendChild(set_options("Chinese Part 1 CMA Exam"));
        test_test.appendChild(set_options("Chinese Part 2 CMA Exam"));
        test_test.appendChild(set_options("Part 1 CMA Exam"));
        test_test.appendChild(set_options("Part 2 CMA Exam"));
        test_test.appendChild(set_options("???????????? - ??????????????????????????????"));
        test_test.appendChild(set_options("???????????? - ??????????????????"));
    }
    else if (event.target.value == "International Board of Heart Rhythm Examiners") {
        test_test.appendChild(set_options("Cardiac Device Remote Monitoring Specialist (CDRMS)"));
        test_test.appendChild(set_options("Certified Cardiac Device Specialist (CCDS)"));
        test_test.appendChild(set_options("Certified EP Specialist (CEPS) - Allied Professionals"));
        test_test.appendChild(set_options("Certified EP Specialist (CEPS-A) - Physicians (Adult)"));
        test_test.appendChild(set_options("Certified EP Specialist (CEPS-P) - Physicians (Pediatric)"));
    }
    else if (event.target.value == "International Board of Lactation Consultant Examiners") {
        test_test.appendChild(set_options("International Board Certified Lactation Consultant - Chinese"));
        test_test.appendChild(set_options("International Board Certified Lactation Consultant - Croatia"));
        test_test.appendChild(set_options("International Board Certified Lactation Consultant - Danish"));
        test_test.appendChild(set_options("International Board Certified Lactation Consultant - Dutch"));
        test_test.appendChild(set_options("International Board Certified Lactation Consultant - English"));
        test_test.appendChild(set_options("International Board Certified Lactation Consultant - French"));
        test_test.appendChild(set_options("International Board Certified Lactation Consultant - German"));
        test_test.appendChild(set_options("International Board Certified Lactation Consultant - Greek"));
        test_test.appendChild(set_options("International Board Certified Lactation Consultant - Italian"));
        test_test.appendChild(set_options("International Board Certified Lactation Consultant - Korean"));
        test_test.appendChild(set_options("International Board Certified Lactation Consultant - Polish"));
        test_test.appendChild(set_options("International Board Certified Lactation Consultant - Spanish"));
        test_test.appendChild(set_options("International Board Certified Lactation Consultant Hungarian"));
        test_test.appendChild(set_options("International Board Certified Lactation Consultant Japanese"));
        test_test.appendChild(set_options("International Board Certified Lactation Consultant Slovenian"));
        test_test.appendChild(set_options("InternationalBoardCertifiedLactationConsultant - Indonesian"));
        test_test.appendChild(set_options("InternationalBoardCertifiedLactationConsultant-Portuguese"));
    }
    else if (event.target.value == "International Board of Specialty Certification") {
        test_test.appendChild(set_options("Certified Community Paramedic"));
        test_test.appendChild(set_options("Certified Critical Care Paramedic"));
        test_test.appendChild(set_options("Certified Flight Paramedic"));
        test_test.appendChild(set_options("Certified Specialist in Trauma Registries"));
        test_test.appendChild(set_options("Certified Specialist in Trauma Registries PBT"));
        test_test.appendChild(set_options("Certified Tactical Paramedic"));
        test_test.appendChild(set_options("Certified Tactical Responder"));
        test_test.appendChild(set_options("Certified Wilderness Paramedic"));
        test_test.appendChild(set_options("Certified Wilderness Paramedic Beta"));
        test_test.appendChild(set_options("Critical Care Paramedic Course BETA"));
        test_test.appendChild(set_options("Desginated Infection Control Officer (Live) Exam"));
    }
    else if (event.target.value == "International Council of Shopping Centers") {
        test_test.appendChild(set_options("Certified Leasing Specialist Global Arabic"));
        test_test.appendChild(set_options("Certified Leasing Specialist Global English"));
        test_test.appendChild(set_options("Certified Marketing Director Global English"));
        test_test.appendChild(set_options("Certified Retail Property Executive"));
        test_test.appendChild(set_options("Certified Retail Real Estate Professional"));
        test_test.appendChild(set_options("Certified Shopping Center Manager Arabic"));
        test_test.appendChild(set_options("Certified Shopping Center Manager Global English"));
        test_test.appendChild(set_options("Certified Shopping Center Manager Global Simplified Chinese"));
        test_test.appendChild(set_options("Development, Design & Construction Professional English"));
    }
    else if (event.target.value == "International Facility Management Association") {
        test_test.appendChild(set_options("CERTIFIED FACILITY MANAGER"));
    }
    else if (event.target.value == "International WELL Building Institute") {
        test_test.appendChild(set_options("WELL Accredited Professional (WELL AP)"));
        test_test.appendChild(set_options("WELL Accredited Professional (WELL AP) Chinese"));
    }
    else if (event.target.value == "IRS Special Enrollment Examination") {
        test_test.appendChild(set_options("IRS Test Drive"));
        test_test.appendChild(set_options("SEE Part 1 Individuals"));
        test_test.appendChild(set_options("SEE Part 2 Businesses"));
        test_test.appendChild(set_options("SEE Part 3 Representation Practices Procedures"));
    }
    else if (event.target.value == "ISA Certification & Security Certificate Exams") {
        test_test.appendChild(set_options("CAP- Certified Automation Professional"));
        test_test.appendChild(set_options("CAPA- CAP Associate Exam"));
        test_test.appendChild(set_options("CCST1- Certified Control Systems Technician 1"));
        test_test.appendChild(set_options("CCST2- Certified Control Systems Technician 2"));
        test_test.appendChild(set_options("CCST3- Certified Control Systems Technician 3"));
        test_test.appendChild(set_options("CST- CST Associate Technician Exam"));
        test_test.appendChild(set_options("ISA/IEC 62443 Cybersecurity Fundamentals Specialist"));
        test_test.appendChild(set_options("ISA/IEC 62443 Cybersecurity Maintenance"));
        test_test.appendChild(set_options("ISA/IEC 62443 Cybersecurity Risk Assessment Specialist"));
        test_test.appendChild(set_options("ISA/IEC 62443 Cybersecurity System Design Specialist"));
    }
    else if (event.target.value == "ISA84 Certificate Program") {
        test_test.appendChild(set_options("ISA84 SIL Selection Specialist"));
        test_test.appendChild(set_options("ISA84 SIL Selection Specialist Spanish"));
        test_test.appendChild(set_options("ISA84 SIL Verification Specialist"));
        test_test.appendChild(set_options("ISA84 SIL Verification Specialist Spanish"));
        test_test.appendChild(set_options("ISA84 SIS Fundamentals Specialist"));
        test_test.appendChild(set_options("ISA84 SIS Fundamentals Specialist Spanish"));
    }
    else if (event.target.value == "TOSA CERTIFICATION") {
        test_test.appendChild(set_options("Tosa CyberCitizen (EN)"));
        test_test.appendChild(set_options("Tosa DigComp (EN)"));
        test_test.appendChild(set_options("Tosa Excel 365 (EN)"));
        test_test.appendChild(set_options("Tosa Google Docs (EN)"));
        test_test.appendChild(set_options("Tosa Google Sheets (EN)"));
        test_test.appendChild(set_options("Tosa Google Slides (EN)"));
        test_test.appendChild(set_options("Tosa Illustrator (EN)"));
        test_test.appendChild(set_options("Tosa InDesign (EN)"));
        test_test.appendChild(set_options("Tosa Photoshop (EN)"));
        test_test.appendChild(set_options("Tosa PowerPoint 365 (EN)"));
        test_test.appendChild(set_options("Tosa Word 365 (EN)"));

    }
    else if (event.target.value == "Kaplan Official Test Day Experience") {
        test_test.appendChild(set_options("KGRE"));
    }
    else if (event.target.value == "ISTQB Certified Tester") {
        test_test.appendChild(set_options("ISTQB AI Testing (CT-AI) for Native English Speaker"));
        test_test.appendChild(set_options("ISTQB AI Testing (CT-AI) for Non-native English Speaker"));
        test_test.appendChild(set_options("ISTQB Foundation Level (CTFL) for Native English Speaker"));
        test_test.appendChild(set_options("ISTQB Foundation Level (CTFL) for Non-native English Speaker"));
    }
    else if (event.target.value == "Language Testing International - ProScheduler") {
        test_test.appendChild(set_options("Listening & Reading Computer Adaptive Test"));
        test_test.appendChild(set_options("Listening Proficiency Test"));
        test_test.appendChild(set_options("Listening Proficiency Test"));
        test_test.appendChild(set_options("Listening Proficiency Test"));
        test_test.appendChild(set_options("Oral Proficiency Interview - Computer"));
        test_test.appendChild(set_options("Reading Proficiency Test"));
        test_test.appendChild(set_options("Reading Proficiency Test"));
        test_test.appendChild(set_options("Reading Proficiency Test"));
        test_test.appendChild(set_options("Writing Proficiency Test"));
        test_test.appendChild(set_options("Writing Proficiency Test"));
        test_test.appendChild(set_options("Writing Proficiency Test"));

    }
    else if (event.target.value == "Law School Admission Test") {
        test_test.appendChild(set_options("Law School Admission Test"));
        test_test.appendChild(set_options("Law School Admission Test International"));
        test_test.appendChild(set_options("Law School Admission Test Paper"));
        test_test.appendChild(set_options("Law School Admission Test Writing"));
    }
    else if (event.target.value == "Lymphology Association of North America") {
        test_test.appendChild(set_options("Certified Lymphedema Therapist"));
    }
    else if (event.target.value == "Maryland Insurance Administration") {
        test_test.appendChild(set_options("Accident and Health or Sickness Producer"));
        test_test.appendChild(set_options("Adviser Life and Accident and Health or Sickness"));
        test_test.appendChild(set_options("Adviser Property and Casualty"));
        test_test.appendChild(set_options("Casualty Producer"));
        test_test.appendChild(set_options("Life Producer"));
        test_test.appendChild(set_options("Life and Accident and Health or Sickness Producer - Combo"));
        test_test.appendChild(set_options("Personal Lines"));
        test_test.appendChild(set_options("Property Producer"));
        test_test.appendChild(set_options("Property and Casualty Producer - Combo"));
        test_test.appendChild(set_options("Public Adjuster"));
        test_test.appendChild(set_options("Title Producer"));
    }
    else if (event.target.value == "Maryland Insurance Administration Retake") {
        test_test.appendChild(set_options("Adviser Life and Health General"));
        test_test.appendChild(set_options("Adviser Life and Health State"));
        test_test.appendChild(set_options("Adviser Property Casualty General"));
        test_test.appendChild(set_options("Adviser Property Casualty State"));
        test_test.appendChild(set_options("Casualty Producer General"));
        test_test.appendChild(set_options("Casualty Producer State"));
        test_test.appendChild(set_options("Health Producer General"));
        test_test.appendChild(set_options("Health Producer State"));
        test_test.appendChild(set_options("Life Producer General"));
        test_test.appendChild(set_options("Life Producer State"));
        test_test.appendChild(set_options("Life and Health Producer Combo General"));
        test_test.appendChild(set_options("Life and Health Producer Combo State"));
        test_test.appendChild(set_options("Personal Lines General"));
        test_test.appendChild(set_options("Personal Lines State"));
        test_test.appendChild(set_options("Property Casualty Producer Combo General"));
        test_test.appendChild(set_options("Property Casualty Producer Combo State"));
        test_test.appendChild(set_options("Property Producer General"));
        test_test.appendChild(set_options("Property Producer State"));
        test_test.appendChild(set_options("Public Adjuster General"));
        test_test.appendChild(set_options("Public Adjuster State"));
        test_test.appendChild(set_options("Title General"));
        test_test.appendChild(set_options("Title State"));
    }
    else if (event.target.value == "Massachusetts Insurance") {
        test_test.appendChild(set_options("1651 - PRODUCER LIFE INSURANCE"));
        test_test.appendChild(set_options("1652 - PROD ACC/HLTH OR SICK"));
        test_test.appendChild(set_options("1653 - PRODUCER PROPERTY"));
        test_test.appendChild(set_options("1654 - PRODUCER CASUALTY"));
        test_test.appendChild(set_options("1655 - ADVISER LIFE"));
        test_test.appendChild(set_options("1656 - ADV ACC/HLTH OR SICK"));
        test_test.appendChild(set_options("1657 - ADV PROPERTY & CASUALTY"));
        test_test.appendChild(set_options("1658 - PUBLIC ADJUSTER"));
        test_test.appendChild(set_options("1659 - PROD LIM LINES CREDIT"));
        test_test.appendChild(set_options("1660 - MOT VEH DMG APPRAISER"));
        test_test.appendChild(set_options("1661 - PROD PERSONAL LINES"));
        test_test.appendChild(set_options("1662 - PRODUCER LIFE (SPANISH)"));
        test_test.appendChild(set_options("1663 - PROD ACC/HLTH OR SICK (SPANISH)"));
        test_test.appendChild(set_options("1664 - PRODUCER PROPERTY (SPANISH)"));
        test_test.appendChild(set_options("1665 - PRODUCER CASUALITY (SPANISH)"));
        test_test.appendChild(set_options("1666 - ADVISOR LIFE (SPANISH)"));
        test_test.appendChild(set_options("1667 - ADV ACC/HLTH OR SICK (SPANISH)"));
        test_test.appendChild(set_options("1668 - ADV PROPERTY & CASUALTY (SPANISH)"));
        test_test.appendChild(set_options("1669 - PUBLIC ADJUSTER (SPANISH)"));
        test_test.appendChild(set_options("1670 - PROD LIM LINES CREDIT (SPANISH)"));
        test_test.appendChild(set_options("1671 - MOT VEH DMG APPRAISER (SPANISH)"));
        test_test.appendChild(set_options("1672 - PROD PERSONAL LINES (SPANISH)"));
    }
    else if (event.target.value == "Matrix42") {
        test_test.appendChild(set_options("EndPoint Security Level 1"));
        test_test.appendChild(set_options("Service Management Level 1"));
        test_test.appendChild(set_options("Software Asset Management Level 1"));
        test_test.appendChild(set_options("Unified Endpoint Management Level 1"));
    }
    else if (event.target.value == "Qualifying Examination - Part I") {
        test_test.appendChild(set_options("Examen d'aptitude CMC - partie I"));
        test_test.appendChild(set_options("MCC Qualifying Examination - Part I"));
    }
    else if (event.target.value == "Therapeutics Decision-Making Examination") {
        test_test.appendChild(set_options("Therapeutics Decision-Making Examination"));
    }
    else if (event.target.value == "Medical Dosimetrist Certification Board") {
        test_test.appendChild(set_options("Certified Medical Dosimetrist"));
    }
    else if (event.target.value == "Medical Surgical Nursing Certification Board") {
        test_test.appendChild(set_options("Certified Medical-Surgical Registered Nurse"));
        test_test.appendChild(set_options("Coordination and Transition Management"));
    }
    else if (event.target.value == "Michigan English Test (MET)") {
        test_test.appendChild(set_options("MET 2 Skill (Remotely Proctored)"));
        test_test.appendChild(set_options("MET 2 Skill (Test Center)"));
        test_test.appendChild(set_options("MET 4 Retake Listening"));
        test_test.appendChild(set_options("MET 4 Retake Reading"));
        test_test.appendChild(set_options("MET 4 Retake Writing"));
        test_test.appendChild(set_options("MET 4 Skill (Remotely Proctored)"));
        test_test.appendChild(set_options("MET 4 Skill (Test Center)"));
        test_test.appendChild(set_options("MET 4 Skill Exemption Form (Remotely Proctored)"));
        test_test.appendChild(set_options("MET 4 Skill Exemption Form (Test Center)"));
    }
    else if (event.target.value == "Moody's Analytics") {
        test_test.appendChild(set_options("Accelerated 10"));
        test_test.appendChild(set_options("Accelerated 15"));
        test_test.appendChild(set_options("CDMS Certification Exam"));
        test_test.appendChild(set_options("CFITS Certification Exam"));
        test_test.appendChild(set_options("Cards and Payments I"));
        test_test.appendChild(set_options("Cards and Payments II"));
        test_test.appendChild(set_options("Cards and Payments III (Constructed Response)"));
        test_test.appendChild(set_options("Certified Branch Manager"));
        test_test.appendChild(set_options("Certified Wealth Practitioner"));
        test_test.appendChild(set_options("Commercial Credit Certification Exam"));
        test_test.appendChild(set_options("Commercial Credit Certification Exam Bahasa"));
        test_test.appendChild(set_options("Commercial Credit Certification Exam Simplified Chinese"));
        test_test.appendChild(set_options("Commercial Credit Certification Exam Thai"));
        test_test.appendChild(set_options("Examen para el Certificado en Cr??dito Comercial"));
        test_test.appendChild(set_options("Examen pour le certificat en services bancaires pour PME"));
        test_test.appendChild(set_options("Examen sur le cr??dit commercial"));
        test_test.appendChild(set_options("Professional Retail Banker Exam"));
        test_test.appendChild(set_options("Retail Banking I Exam"));
        test_test.appendChild(set_options("Retail Banking II Exam"));
        test_test.appendChild(set_options("Retail Banking III Exam"));
        test_test.appendChild(set_options("Retail Risk I"));
        test_test.appendChild(set_options("Small Business Banking Certificate Examination"));
        test_test.appendChild(set_options("Small Business Banking Certificate Examination (Indonesian)"));
    }
    else if (event.target.value == "Moody's") {
        test_test.appendChild(set_options("Corporate Finance & Project and Infrastructure Finance"));
        test_test.appendChild(set_options("Executive Form"));
        test_test.appendChild(set_options("FAM"));
        test_test.appendChild(set_options("Financial Institutions Group-Banking & Managed Funds"));
        test_test.appendChild(set_options("Financial Institutions Group-Insurance"));
        test_test.appendChild(set_options("MIS Core Exam"));
        test_test.appendChild(set_options("PPIF-Sovereign, Sub-Sovereign and PFG"));
        test_test.appendChild(set_options("Structured Finance"));
        test_test.appendChild(set_options("Structured Finance Group"));
        test_test.appendChild(set_options("Team Asset Class -Banking"));
        test_test.appendChild(set_options("Team Asset Class -Insurance"));
        test_test.appendChild(set_options("Team Asset Class -Managed Investments"));
        test_test.appendChild(set_options("Team Asset Class -Project Finance"));
        test_test.appendChild(set_options("Team Asset Class -Public Finance"));
        test_test.appendChild(set_options("Team Asset Class -Sovereign"));
        test_test.appendChild(set_options("Team Asset Class -Structured Finance"));
        test_test.appendChild(set_options("Team Asset Class -Sub-Sovereign"));
    }
    else if (event.target.value == "National Board for Certification of School Nurses") {
        test_test.appendChild(set_options("National Certification for School Nurses"));
    }
    else if (event.target.value == "American Association of Medical Assistants") {
        test_test.appendChild(set_options("CMA Certification/Recertification Examination"));
    }
    else if (event.target.value == "American Board of Medical Genetics and Genomics") {
        test_test.appendChild(set_options("Clinical Cytogenetics & Genomics Exam"));
        test_test.appendChild(set_options("Clinical Genetics & Genomics Exam"));
        test_test.appendChild(set_options("Clinical Molecular Genetics & Genomics Exam"));
        test_test.appendChild(set_options("Clinical/Medical Biochemical Genetics & Genomics Exam"));
        test_test.appendChild(set_options("General Examination"));
        test_test.appendChild(set_options("Laboratory Genetics & Genomics Examination"));
    }
    else if (event.target.value == "American Board of Obesity Medicine") {
        test_test.appendChild(set_options("Certification Examination for Obesity Medicine Physician"));
    }
    else if (event.target.value == "American Board of Orthopaedic Surgery") {
        test_test.appendChild(set_options("Adult Reconstruction Practice Profiled Recertification Exam"));
        test_test.appendChild(set_options("American Board of Orthopaedic Surgery, Inc. Certifying Exam"));
        test_test.appendChild(set_options("Foot & Ankle Practice Profiled Recertification Examination"));
        test_test.appendChild(set_options("General Clinical Recertification Examination"));
        test_test.appendChild(set_options("Musculoskeletal Oncology Practice Profiled Recert Exam"));
        test_test.appendChild(set_options("Orthopaedic Sports Medicine Certification Examination"));
        test_test.appendChild(set_options("Orthopaedic Sports Medicine Recertification Examination"));
        test_test.appendChild(set_options("Orthopaedic Trauma Practice Profiled Recert Examination"));
        test_test.appendChild(set_options("Pediatric Orthopaedic Practice Profiled Recert Examination"));
        test_test.appendChild(set_options("Shoulder/Elbow Practice Profiled Recert Examination"));
        test_test.appendChild(set_options("Surgery of the Hand Recertification Examination"));
        test_test.appendChild(set_options("Surgery of the Spine Practice Profiled Recertification Exam"));
    }
    else if (event.target.value == "American Board of Physical Therapy Specialties") {
        test_test.appendChild(set_options("CARDIOVASCULAR AND PULMONARY PHYSICAL THERAPY"));
        test_test.appendChild(set_options("ELECTROPHYSIOLOGIC  PHYSICAL THERAPY"));
        test_test.appendChild(set_options("GERIATRIC PHYSICAL THERAPY"));
        test_test.appendChild(set_options("NEUROLOGIC PHYSICAL THERAPY"));
        test_test.appendChild(set_options("ORTHOPAEDIC PHYSICAL THERAPY"));
        test_test.appendChild(set_options("Oncology Physical Therapy"));
        test_test.appendChild(set_options("PEDIATRIC PHYSICAL THERAPY"));
        test_test.appendChild(set_options("SPORTS PHYSICAL THERAPY"));
        test_test.appendChild(set_options("WOMEN'S HEALTH PHYSICAL THERAPY"));
        test_test.appendChild(set_options("Wound Management Physical Therapy"));
    }
    else if (event.target.value == "American Board of Preventive Medicine") {
        test_test.appendChild(set_options("Addiction Medicine Examination"));
        test_test.appendChild(set_options("Aerospace Medicine Examination"));
        test_test.appendChild(set_options("Clinical Informatics Examination"));
        test_test.appendChild(set_options("Core Examination"));
        test_test.appendChild(set_options("Occupational Medicine Examination"));
        test_test.appendChild(set_options("Public Health/General Preventive Medicine Examination"));
        test_test.appendChild(set_options("Undersea and Hyperbaric Medicine Examination"));
    }
    else if (event.target.value == "American Board of Quality & Utilization Review Physicians") {
        test_test.appendChild(set_options("HCQM Certification Exam"));
    }
    else if (event.target.value == "American Board of Surgery") {
        test_test.appendChild(set_options("Hand Surgery Certification/Recertification Examination"));
    }
    else if (event.target.value == "American Osteopathic Board Of Orthopaedic Surgery") {
        test_test.appendChild(set_options("AMER OSTEOPATHIC WRITTEN CERT EXAM"));
        test_test.appendChild(set_options("Osteopathic Continuous Certification Exam"));
    }
    else if (event.target.value == "Health & Wellness Coach Certifying Examination Program") {
        test_test.appendChild(set_options("Health & Wellness Coach Certifying Examination"));
    }
    else if (event.target.value == "International Board of Heart Rhythm Examiners") {
        test_test.appendChild(set_options("Certification Exam in Cardiac Electrophysiology"));
        test_test.appendChild(set_options("Certified Cardiac Device Specialist Exam (CCDS)"));
        test_test.appendChild(set_options("Certified EP Specialist (CEPS)  Allied Professionals"));
    }
    else if (event.target.value == "International Council for Veterinary Assessment") {
        test_test.appendChild(set_options("North American Veterinary Licensing Exam"));
        test_test.appendChild(set_options("North American Veterinary Licensing Exam - French"));
    }
    else if (event.target.value == "Nat. Commission for Cert. of Anesthesiologist Assistants") {
        test_test.appendChild(set_options("Certification Examination"));
        test_test.appendChild(set_options("Examination for Continued Demonstration of Qualifications"));
    }
    else if (event.target.value == "National Board of Echocardiography") {
        test_test.appendChild(set_options("Examination in Special Competence in Advanced PTE"));
        test_test.appendChild(set_options("Examination in Special Competence in Basic PTE"));
        test_test.appendChild(set_options("Examination of Special Competence in Adult Echo"));
        test_test.appendChild(set_options("Recertification Exam in Adult Echocardiography"));
        test_test.appendChild(set_options("Recertification Exam of Special Competence in Advance PTE"));
        test_test.appendChild(set_options("Special Competency in Critical Care Echocardiography Exam"));
    }
    else if (event.target.value == "NBME Subject Examination Program") {
        test_test.appendChild(set_options("Clinical Neurology"));
        test_test.appendChild(set_options("Comprehensive Basic Science"));
        test_test.appendChild(set_options("Emergency Medicine Advanced Clinical"));
        test_test.appendChild(set_options("Family Medicine Modular Exams"));
        test_test.appendChild(set_options("IFOM-Basic Sciences Examination - English"));
        test_test.appendChild(set_options("IFOM-Clinical Sciences  Examination - English"));
        test_test.appendChild(set_options("IFOM-Clinical Sciences  Examination - Italian"));
        test_test.appendChild(set_options("IFOM-Clinical Sciences  Examination - Portuguese"));
        test_test.appendChild(set_options("IFOM-Clinical Sciences  Examination - Spanish"));
        test_test.appendChild(set_options("Medicine"));
        test_test.appendChild(set_options("Obstetrics and Gynecology"));
        test_test.appendChild(set_options("Pediatrics"));
        test_test.appendChild(set_options("Psychiatry"));
        test_test.appendChild(set_options("Surgery"));
    }
    else if (event.target.value == "Special Purposes Exam") {
        test_test.appendChild(set_options("COMP SPECIAL PURPOSE EXAM"));
    }
    else if (event.target.value == "STEP1") {
        test_test.appendChild(set_options("Step 1 - United States Medical Licensing Examination"));
    }
    else if (event.target.value == "STEP2") {
        test_test.appendChild(set_options("Step 2 - United States Medical Licensing Examination"));
    }
    else if (event.target.value == "STEP3") {
        test_test.appendChild(set_options("Step 3 - United States Medical Licensing Examination"));
    }
    else if (event.target.value == "Surgery of the Hand Subspecialty Certification Examination") {
        test_test.appendChild(set_options("Surgery of the Hand Subspecialty Certification Examination"));
    }
    else if (event.target.value == "USMLE Practice Tests") {
        test_test.appendChild(set_options("STEP 3 PRACTICE TEST"));
        test_test.appendChild(set_options("Step 1 Practice Test"));
        test_test.appendChild(set_options("Step 2 Practice Test"));
    }
    else if (event.target.value == "AMERICAN BOARD OF HAIR RESTORATION SURGERY") {
        test_test.appendChild(set_options("AMERICAN BOARD OF HAIR RESTORATION SURGERY"));
    }
    else if (event.target.value == "National Commission for Health Education Credentialing") {
        test_test.appendChild(set_options("Certified Health Education Specialist"));
        test_test.appendChild(set_options("Master Certified Health Education Specialist"));
    }
    else if (event.target.value == "National Council for Certified Personal Trainers") {
        test_test.appendChild(set_options("Certified Group Exercise Instructor"));
        test_test.appendChild(set_options("Certified Indoor Cycling Instructor"));
        test_test.appendChild(set_options("Certified Personal Trainer"));
        test_test.appendChild(set_options("Certified Strength Training Specialist"));
        test_test.appendChild(set_options("Certified Yoga Instructor"));
    }
    // Web site issue
    // else if(event.target.value == "National Council of Architect Registration Boards"){
    //     // test_test.appendChild(set_options(""));
    // }
    // else if(event.target.value == "NCARB ProProctor Test Run"){
    //     test_test.appendChild(set_options(""));
    // }
    else if (event.target.value == "National Council on Strength & Fitness") {
        test_test.appendChild(set_options("Certified Fitness Instructor"));
        test_test.appendChild(set_options("Certified Personal Trainer"));
        test_test.appendChild(set_options("Certified Strength Coach"));
        test_test.appendChild(set_options("Entrenador Personal Certificado"));
        test_test.appendChild(set_options("Sport Nutrition Specialist"));

    }
    else if (event.target.value == "National Dental Assisting Examining Board") {
        test_test.appendChild(set_options("L'examen ecrit du BNEAD"));
        test_test.appendChild(set_options("NDAEB Written Examination"));

    }
    else if (event.target.value == "National Dental Examining Board of Canada") {
        test_test.appendChild(set_options("Assessment of Clinical Judgement"));
        test_test.appendChild(set_options("Assessment of Fundamental Knowledge"));
        test_test.appendChild(set_options("Chirurgie buccale et maxillo-faciale"));
        test_test.appendChild(set_options("Dental Public Health"));
        test_test.appendChild(set_options("Dental Specialty Core Knowledge Examination"));
        test_test.appendChild(set_options("Dentisterie pediatrique"));
        test_test.appendChild(set_options("Endodontics"));
        test_test.appendChild(set_options("Endodontie"));
        test_test.appendChild(set_options("Examen des connaissances communes aux specialites dentaires"));
        test_test.appendChild(set_options("Medecine buccale"));
        test_test.appendChild(set_options("Medecine buccale et/ou pathologie buccale"));
        test_test.appendChild(set_options("Oral Medicine"));
        test_test.appendChild(set_options("Oral Medicine and/or Oral Pathology"));
        test_test.appendChild(set_options("Oral Pathology"));
        test_test.appendChild(set_options("Oral and Maxillofacial Radiology"));
        test_test.appendChild(set_options("Oral and Maxillofacial Surgery"));
        test_test.appendChild(set_options("Orthodontics"));
        test_test.appendChild(set_options("Orthodontie"));
        test_test.appendChild(set_options("Parodontie"));
        test_test.appendChild(set_options("Pathologie buccale"));
        test_test.appendChild(set_options("Pediatric Dentistry"));
        test_test.appendChild(set_options("Periodontics"));
        test_test.appendChild(set_options("Prosthodontics"));
        test_test.appendChild(set_options("Prosthodontie"));
        test_test.appendChild(set_options("Radiologie buccale et maxillo-faciale"));
        test_test.appendChild(set_options("Sante publique dentaire"));
        test_test.appendChild(set_options("??valuation des connaissances fondamentales"));
        test_test.appendChild(set_options("??valuation du jugement clinique"));
    }
    else if (event.target.value == "National Elevator Industry Educational Program") {
        test_test.appendChild(set_options("100-Trade Skills"));
        test_test.appendChild(set_options("200-Hoistway Structures"));
        test_test.appendChild(set_options("300-Electrical Fundamentals"));
        test_test.appendChild(set_options("400-Electrical Theory & Application"));
        test_test.appendChild(set_options("500-Installation"));
        test_test.appendChild(set_options("600-Solid State"));
        test_test.appendChild(set_options("700-Power & Logic"));
        test_test.appendChild(set_options("800-Advanced Topics in Elevators"));
        test_test.appendChild(set_options("Mechanic Exam"));
        test_test.appendChild(set_options("Mechanic Exam - Audio"));
    }
    else if (event.target.value == "National Federation of Paralegal Associations") {
        test_test.appendChild(set_options("Paralegal Advanced Competency Exam"));
        test_test.appendChild(set_options("Paralegal Core Competency Exam"));
    }
    else if (event.target.value == "National Fire Protection Assoc") {
        test_test.appendChild(set_options("Electrical Safety Compliance Professional"));
        test_test.appendChild(set_options("Electrical Safety Technician"));
        test_test.appendChild(set_options("Electrical Safety Worker"));
        test_test.appendChild(set_options("Emergency Power Systems Specialist"));
        test_test.appendChild(set_options("Emergency Power Systems Specialist - Health Care"));
        test_test.appendChild(set_options("Especialistas en IPM de Sistemas de Rociadores"));
        test_test.appendChild(set_options("Fire Alarm ITM Specialist"));
        test_test.appendChild(set_options("Fire Inspector 1"));
        test_test.appendChild(set_options("Fire Inspector 2"));
        test_test.appendChild(set_options("Fire Plan Examiner"));
        test_test.appendChild(set_options("Fire Protection Specialist"));
        test_test.appendChild(set_options("Hazard Recognition Specialist"));
        test_test.appendChild(set_options("Life Safety Specialist for Health Care"));
        test_test.appendChild(set_options("Sprinkler ITM Specialist"));
        test_test.appendChild(set_options("Water-Based Inspection, Testing, and Maintenance"));
        test_test.appendChild(set_options("Water-Based Systems Professional"));
        test_test.appendChild(set_options("Wildfire Mitigation Specialist"));
    }
    else if (event.target.value == "National Football League Players Association") {
        test_test.appendChild(set_options("NFLPA Contract Advisor Examination"));
    }
    else if (event.target.value == "National Inspection Testing and Certification Corporation") {
        national_inspection_testing_and_certification_corporation();
    }
    else if(event.target.value == "National Institute for Automotive Service Excellence"){
        national_institute_for_automotive_service_excellence();
    }
    else if (event.target.value == "National Registry of Certified Medical Examiners") {
        test_test.appendChild(set_options("Medical Examiner Certification Test"));
    }
    else if (event.target.value == "National Roofing Contractors Association") {
        test_test.appendChild(set_options("01. ProCertified Asphalt Shingle Systems Installer"));
        test_test.appendChild(set_options("02. Instalador ProCertified en sistemas de tejas asfalticas"));
        test_test.appendChild(set_options("03. ProCertified Thermoplastic Systems Installer"));
        test_test.appendChild(set_options("04. Instalador ProCertified en sistemas termoplasticos"));
        test_test.appendChild(set_options("05. ProCertified Roofing Foreman"));
        test_test.appendChild(set_options("06. Jefe de grupo de techado ProCertified"));
        test_test.appendChild(set_options("07. Qualified Assessor: Asphalt Shingle Systems"));
        test_test.appendChild(set_options("08. Asesor Cualificado: Sistemas de tejas asfalticas"));
        test_test.appendChild(set_options("09. Qualified Assessor: Thermoplastic Systems"));
        test_test.appendChild(set_options("10. Asesor Cualificado: Sistemas termoplasticos"));
        test_test.appendChild(set_options("11. ProCertified EPDM Systems Installer"));
        test_test.appendChild(set_options("12.  Instalador ProCertified en sistemas de EPDM"));
    }
    else if (event.target.value == "NCIDQ") {
        test_test.appendChild(set_options("Interior Design Fundamentals Exam"));
        test_test.appendChild(set_options("Interior Design Fundamentals Exam French"));
        test_test.appendChild(set_options("Interior Design Professional Exam"));
        test_test.appendChild(set_options("Interior Design Professional Exam French"));
        test_test.appendChild(set_options("Practicum"));
        test_test.appendChild(set_options("Practicum French"));
    }
    else if (event.target.value == "NCTRC") {
        test_test.appendChild(set_options("CERT THERAPEUTIC RECREATION SPECIALIST"));
    }
    else if (event.target.value == "Nebraska Insurance") {
        test_test.appendChild(set_options("1301 - PROD LIFE & ANNUITIES"));
        test_test.appendChild(set_options("1302 - PROD ACC HLTH OR SICKNESS"));
        test_test.appendChild(set_options("1303 - PROD LIFE & ANNUITIES ACC HLTH OR SICKNESS"));
        test_test.appendChild(set_options("1304 - PROD PC"));
        test_test.appendChild(set_options("1307 - CONSULT LIFE & ANNUITIES ACC HLTH OR SICKNESS"));
        test_test.appendChild(set_options("1308 - CONSULT PC"));
        test_test.appendChild(set_options("1309 - PROD CROP"));
        test_test.appendChild(set_options("1310 - PRODUCER'S PUBLIC ADJUSTERS"));
        test_test.appendChild(set_options("1313 - PROD MOTOR CLUB"));
        test_test.appendChild(set_options("1316 - PROD TITLE"));
        test_test.appendChild(set_options("1321 - PROD PERSONAL LINES"));
        test_test.appendChild(set_options("1322 - PROD PROPERTY"));
        test_test.appendChild(set_options("1323 - PROD CASUALTY"));
        test_test.appendChild(set_options("1324- PRE-NEED FUNERAL INSURANCE"));
        test_test.appendChild(set_options("1326- VIATICAL INSURANCE"));

    }
    else if (event.target.value == "GB") {
        test_test.appendChild(set_options("GB0191 - Constructing Small and Med-Sized ENT Network (CHS)"));
        test_test.appendChild(set_options("GB0191 - Constructing Small and Med-Sized ENT Network (ENU)"));
        test_test.appendChild(set_options("GB0192 - ????????????????????????V1.0"));
        test_test.appendChild(set_options("GB0342-??????H3C????????????"));
        test_test.appendChild(set_options("GB0371 - Constructing H3C High-Perf Campus Networks (CHS)"));
        test_test.appendChild(set_options("GB0371 - Constructing H3C High-Perf Campus Networks (ENU)"));
        test_test.appendChild(set_options("GB0381 - H3C Large-Scale Routing Network Tech v2.0 (CHS)"));
        test_test.appendChild(set_options("GB0381 - H3C Large-Scale Routing Network Tech v2.0 (ENU)"));
        test_test.appendChild(set_options("GB0391 - Constructing Secure Optimized WANs v2.0 (CHS)"));
        test_test.appendChild(set_options("GB0391 - Constructing Secure Optimized WANs v2.0 (ENU)"));
        test_test.appendChild(set_options("GB0510-Constructing Small and Med-Sized ENT Security Network"));
        test_test.appendChild(set_options("GB0510-??????????????????????????????"));
        test_test.appendChild(set_options("GB0530-????????????????????????"));
        test_test.appendChild(set_options("GB0551-????????????????????????"));
        test_test.appendChild(set_options("GB0713-Deploy and manage the H3C CAS virtualization platform"));
        test_test.appendChild(set_options("GB0713-???????????????H3C CAS???????????????V3.0"));
        test_test.appendChild(set_options("GB0801-H3C Internetwork Expert for R&S Plus written exam"));
        test_test.appendChild(set_options("GB0801-H3C????????????????????????????????????????????????"));
    }
    else if (event.target.value == "New Hampshire Insurance") {
        test_test.appendChild(set_options("1261 - PRODUCER'S LIFE INSURANCE"));
        test_test.appendChild(set_options("1262 - PRODUCER'S ACCIDENT & HEALTH INSURANCE"));
        test_test.appendChild(set_options("1263 - PRODUCER'S LIFE, ACCIDENT, & HEATLH INSURANCE"));
        test_test.appendChild(set_options("1264 - PRODUCER'S PROPERTY AND CASUALTY INSURANCE"));
        test_test.appendChild(set_options("1272 - PRODUCER'S TITLE INSURANCE"));
        test_test.appendChild(set_options("1273 - PUBLIC  ADJUSTER"));
        test_test.appendChild(set_options("1275 - ADJUSTER'S PROPERTY AND CASUALTY INSURANCE"));
        test_test.appendChild(set_options("1276 - ADJUSTER'S WORKERS COMPESATION INSURANCE"));
        test_test.appendChild(set_options("1278 - NEW HAMPSHIRE LIFE INSURANCE LAWS/REGULATIONS"));
        test_test.appendChild(set_options("1279-NEW HAMPSHIRE ACCIDENT&HEALTH INSURANCE LAWS/REGULATION"));
        test_test.appendChild(set_options("1280 -NEW HAMP LIFE, ACCIDENT & HEALTH INS. LAWS/REGULATIONS"));
        test_test.appendChild(set_options("1281- NEW HAMP PROPERTY & CASUALTY INSURANCE LAWS/REGULATIOS"));
        test_test.appendChild(set_options("1283 - NEW HAMP. ADJUSTERS PROPERTY & CASUALTY INS. LAWS/REG"));
        test_test.appendChild(set_options("1284 - PRODUCERS PROPERTY"));
        test_test.appendChild(set_options("1285 - PRODUCERS CASUALTY"));
        test_test.appendChild(set_options("1286 - PRODUCERS PERSONAL LINES"));
        test_test.appendChild(set_options("1287 - PRODUCERS CREDIT"));

    }
    else if (event.target.value == "New Mexico Insurance") {
        test_test.appendChild(set_options("1825 - Life Insurance Producer"));
        test_test.appendChild(set_options("1826 - Accident and Health or Sickness Insurance Producer"));
        test_test.appendChild(set_options("1827 - Life, Accident and Health or Sickness Insurance Produ"));
        test_test.appendChild(set_options("1828 - Property Insurance Producer"));
        test_test.appendChild(set_options("1829 - Casualty Insurance Producer"));
        test_test.appendChild(set_options("1831 - Property, and Casualty Insurance Producer"));
        test_test.appendChild(set_options("1833 - Title"));
        test_test.appendChild(set_options("1834 - Bail"));
        test_test.appendChild(set_options("1838 - Personal Lines Insurance Producer"));
        test_test.appendChild(set_options("1839 - Public Adjuster"));
        test_test.appendChild(set_options("1840 - Independent and Staff Adjuster"));
        test_test.appendChild(set_options("1841- Vida,"));
        test_test.appendChild(set_options("1842 - Vida"));
        test_test.appendChild(set_options("1843 - Accidente y Salud o Enfermedad"));
        test_test.appendChild(set_options("1844 - Propiedad y Siniestros"));
        test_test.appendChild(set_options("1845 - Propiedad"));
        test_test.appendChild(set_options("1846 - Siniestros"));
        test_test.appendChild(set_options("1847 -  Lineas Personales"));
        test_test.appendChild(set_options("1848 - Ajustador Publico"));
        test_test.appendChild(set_options("1849 -  Ajustador de Compania o Independente"));
        test_test.appendChild(set_options("1850 - Seguros de T??tulos"));
        test_test.appendChild(set_options("1851- Seguros de Fianza"));
    }
    else if (event.target.value == "Nokia Partner Skills") {
        test_test.appendChild(set_options("5G NPO Intermediate"));
        test_test.appendChild(set_options("5G NPO Senior"));
        test_test.appendChild(set_options("5G RAN Intermediate"));
        test_test.appendChild(set_options("5G RAN Senior"));
        test_test.appendChild(set_options("5G RAN Specialist"));
        test_test.appendChild(set_options("Backend Development"));
        test_test.appendChild(set_options("Big Data"));
        test_test.appendChild(set_options("CS (move to NFV) Intermediate"));
        test_test.appendChild(set_options("CS (move to NFV) Senior"));
        test_test.appendChild(set_options("CS (move to NFV) Specialist"));
        test_test.appendChild(set_options("DHLR Intermediate"));
        test_test.appendChild(set_options("DHLR Senior"));
        test_test.appendChild(set_options("Database"));
        test_test.appendChild(set_options("Front-end Development"));
        test_test.appendChild(set_options("GDC Radio planning intermediate"));
        test_test.appendChild(set_options("GDC Radio planning senior"));
        test_test.appendChild(set_options("GDC TRS Planning Senior"));
        test_test.appendChild(set_options("NPO LTE Intermediate"));
        test_test.appendChild(set_options("NPO LTE Senior"));
        test_test.appendChild(set_options("Operation & Maintenance"));
        test_test.appendChild(set_options("RAN 2G BSC Senior"));
        test_test.appendChild(set_options("RAN LTE Intermediate"));
        test_test.appendChild(set_options("RAN LTE Senior"));
        test_test.appendChild(set_options("RAN LTE Specialist"));
        test_test.appendChild(set_options("RAN W RNC Senior"));
        test_test.appendChild(set_options("VAS Intermediate"));
        test_test.appendChild(set_options("VAS Junior"));
        test_test.appendChild(set_options("VAS Senior"));
        test_test.appendChild(set_options("VAS Specialist"));
        test_test.appendChild(set_options("VOLTE Intermediate"));
        test_test.appendChild(set_options("VOLTE Senior"));
    }
    else if(event.target.value == "North Dakota Insurance"){
        north_dakota_insurance();
    }
    else if (event.target.value == "North Dakota Insurance Retake") {
        test_test.appendChild(set_options("Accident and Health Insurance Part I Product"));
        test_test.appendChild(set_options("Accident and Health Insurance Part II - Laws and Regulations"));
        test_test.appendChild(set_options("Casualty Insurance Part I - Product"));
        test_test.appendChild(set_options("Casualty Insurance Part II - Laws and Regulations"));
        test_test.appendChild(set_options("Life and Annuity Insurance Part I Product"));
        test_test.appendChild(set_options("Life and Annuity Insurance Part II - Laws and Regulations"));
        test_test.appendChild(set_options("Property Insurance Part I - Product"));
        test_test.appendChild(set_options("Property Insurance Part II - Laws and Regulations"));
    } else if (event.target.value == "NGA Operator Qualification Program") {
        test_test.appendChild(set_options("1 Hour Session"));
        test_test.appendChild(set_options("1.5 Hour Session"));
        test_test.appendChild(set_options("2 Hour Session"));
        test_test.appendChild(set_options("2.5 Hour Session"));
        test_test.appendChild(set_options("3 Hour Session"));
        test_test.appendChild(set_options("3.5 Hour Session"));
        test_test.appendChild(set_options("4 Hour Session"));
        test_test.appendChild(set_options("4.5 Hour Session"));
        test_test.appendChild(set_options("5 Hour Session"));
        test_test.appendChild(set_options("5.5 Hour Session"));
        test_test.appendChild(set_options("6 Hour Session"));
        test_test.appendChild(set_options("6.5 Hour Session"));
        test_test.appendChild(set_options("7 Hour Session"));
        test_test.appendChild(set_options("7.5 Hour Session"));
        test_test.appendChild(set_options("8 Hour Session"));
    }
    else if (event.target.value == "Nursing Community Assessment Service") {
        test_test.appendChild(set_options("Health Care Assistant"));
        test_test.appendChild(set_options("Licensed Practical Nurse"));
        test_test.appendChild(set_options("Registered Nurse"));
        test_test.appendChild(set_options("Registered Nurse Triple Track NCAS"));
        test_test.appendChild(set_options("Registered Psychiatric Nurse"));
    }
    else if (event.target.value == "Commonwealth of Pennsylvania") {
        test_test.appendChild(set_options("Bituminous Underground Mine Electrical Inspector Exam"));
        test_test.appendChild(set_options("Corrections Officer 2 Examination"));
        test_test.appendChild(set_options("DCNR Ranger Trainee Examination"));
    }
    else if (event.target.value == "Oklahoma Bails Bondsman") {
        test_test.appendChild(set_options("Bail Bondsman"));
    }
    else if (event.target.value == "Oklahoma Insurance Adjuster") {
        test_test.appendChild(set_options("Casualty Adjuster"));
        test_test.appendChild(set_options("Crop and Hail Adjuster"));
        test_test.appendChild(set_options("Property Adjuster"));
        test_test.appendChild(set_options("Property and Casualty Adjuster"));
        test_test.appendChild(set_options("Workers Compensation Adjuster"));
    }
    else if (event.target.value == "Oklahoma Insurance Producer") {
        test_test.appendChild(set_options("Accident & Health or Sickness"));
        test_test.appendChild(set_options("Aircraft Title (Producer)"));
        test_test.appendChild(set_options("Casualty"));
        test_test.appendChild(set_options("Life"));
        test_test.appendChild(set_options("Life Accident & Health or Sickness"));
        test_test.appendChild(set_options("Property"));
        test_test.appendChild(set_options("Property & Casualty"));
        test_test.appendChild(set_options("Property & Casualty - Personal Lines Only"));
        test_test.appendChild(set_options("Title (Producer)"));
    }
    else if (event.target.value == "Oman Medical Specialty Board") {
        test_test.appendChild(set_options("Anesthesia"));
        test_test.appendChild(set_options("Cardiology"));
        test_test.appendChild(set_options("Clinical Pathology"));
        test_test.appendChild(set_options("Dental Assistant"));
        test_test.appendChild(set_options("Dermatology"));
        test_test.appendChild(set_options("Diagnostic Radiology (for Physicians)"));
        test_test.appendChild(set_options("Dietician"));
        test_test.appendChild(set_options("Ear, Nose,Throat"));
        test_test.appendChild(set_options("Emergency Medicine"));
        test_test.appendChild(set_options("Endodontics"));
        test_test.appendChild(set_options("Family Medicine"));
        test_test.appendChild(set_options("Gastroenterology"));
        test_test.appendChild(set_options("General Dentistry"));
        test_test.appendChild(set_options("General Practice"));
        test_test.appendChild(set_options("General Surgery"));
        test_test.appendChild(set_options("Internal Medicine"));
        test_test.appendChild(set_options("Lab Technician"));
        test_test.appendChild(set_options("Midwifery"));
        test_test.appendChild(set_options("Nephrology"));
        test_test.appendChild(set_options("Neurosurgery"));
        test_test.appendChild(set_options("Obstetrics & Gynaecology"));
        test_test.appendChild(set_options("Occupational Therapy"));
        test_test.appendChild(set_options("Ophthalmology"));
        test_test.appendChild(set_options("Optometry"));
        test_test.appendChild(set_options("Orthodontics"));
        test_test.appendChild(set_options("Orthopedics"));
        test_test.appendChild(set_options("Pediatrics"));
        test_test.appendChild(set_options("Pharmacist (pharmacy specialist)"));
        test_test.appendChild(set_options("Pharmacy Assistant"));
        test_test.appendChild(set_options("Physiotherapist"));
        test_test.appendChild(set_options("Plastic Surgery"));
        test_test.appendChild(set_options("Psychiatry"));
        test_test.appendChild(set_options("Radiographer"));
        test_test.appendChild(set_options("Radiology"));
        test_test.appendChild(set_options("Urology"));
    }
    else if (event.target.value == "Oncology Nursing Certification Corporation") {
        test_test.appendChild(set_options("Advanced Oncology Certified Nurse Practitioner"));
        test_test.appendChild(set_options("Blood and Marrow Transplant Certified Nurse"));
        test_test.appendChild(set_options("Certified Breast Care Nurse"));
        test_test.appendChild(set_options("Certified Pediatric Hematology Oncology Nurse"));
        test_test.appendChild(set_options("Oncology Certified Nurse"));
    }
    else if (event.target.value == "Ontario College of Pharmacists") {
        test_test.appendChild(set_options("Examen de jurisprudence"));
        test_test.appendChild(set_options("Jurisprudence Exam"));
    }
    else if (event.target.value == "OutSystems") {
        test_test.appendChild(set_options("Architecture Specialist O11 (EN)"));
        test_test.appendChild(set_options("Architecture Specialist O11 (ES)"));
        test_test.appendChild(set_options("Architecture Specialist O11 (JA)"));
        test_test.appendChild(set_options("Architecture Specialist O11 (PT)"));
        test_test.appendChild(set_options("Associate OutSystems Developer (EN)"));
        test_test.appendChild(set_options("Associate Reactive Developer O11 (EN)"));
        test_test.appendChild(set_options("Associate Reactive Developer O11 (ES)"));
        test_test.appendChild(set_options("Associate Reactive Developer O11 (JA)"));
        test_test.appendChild(set_options("Associate Reactive Developer O11 (PT)"));
        test_test.appendChild(set_options("Associate Tech Lead O11 (EN)"));
        test_test.appendChild(set_options("Associate Tech Lead O11 (ES)"));
        test_test.appendChild(set_options("Associate Tech Lead O11 (JA)"));
        test_test.appendChild(set_options("Associate Tech Lead O11 (PT)"));
        test_test.appendChild(set_options("Associate Traditional Web Developer O11 (EN)"));
        test_test.appendChild(set_options("Associate Traditional Web Developer O11 (JA)"));
        test_test.appendChild(set_options("Associate Traditional Web Developer O11(ES)"));
        test_test.appendChild(set_options("Associate Traditional Web Developer O11(PT)"));
        test_test.appendChild(set_options("Delivery Specialist O11 (EN)"));
        test_test.appendChild(set_options("Delivery Specialist O11 (JA)"));
        test_test.appendChild(set_options("Delivery Specialist O11 (ES)"));
        test_test.appendChild(set_options("Delivery Specialist O11 (PT)"));
        test_test.appendChild(set_options("Expert Traditional Web Developer O11 (EN)"));
        test_test.appendChild(set_options("Expert Traditional Web Developer O11 (JA)"));
        test_test.appendChild(set_options("Expert Traditional Web Developer O11 (ES)"));
        test_test.appendChild(set_options("Expert Traditional Web Developer O11 (PT)"));
        test_test.appendChild(set_options("Front-end Developer Specialist O11 (EN)"));
        test_test.appendChild(set_options("Front-end Developer Specialist O11 (JA)"));
        test_test.appendChild(set_options("Front-end Specialization (ES)"));
        test_test.appendChild(set_options("Front-end Specialization (PT)"));
        test_test.appendChild(set_options("Mobile Developer Specialist O11 (EN)"));
        test_test.appendChild(set_options("Mobile Developer Specialist O11 (ES)"));
        test_test.appendChild(set_options("Mobile Developer Specialist O11 (JA)"));
        test_test.appendChild(set_options("Mobile Developer Specialist O11 (PT)"));
        test_test.appendChild(set_options("Professional DevOps Engineer"));
        test_test.appendChild(set_options("Professional DevOps Engineer (ES)"));
        test_test.appendChild(set_options("Professional DevOps Engineer (PT)"));
        test_test.appendChild(set_options("Professional DevOps Engineer O11 (EN)"));
        test_test.appendChild(set_options("Professional Platform Ops Engineer O11 (EN)"));
        test_test.appendChild(set_options("Professional Platform Ops Engineer O11 (ES)"));
        test_test.appendChild(set_options("Professional Platform Ops Engineer O11 (JA)"));
        test_test.appendChild(set_options("Professional Platform Ops Engineer O11 (PT)"));
        test_test.appendChild(set_options("Professional Traditional Web Developer O11 (EN)"));
        test_test.appendChild(set_options("Professional Traditional Web Developer O11 (ES)"));
        test_test.appendChild(set_options("Professional Traditional Web Developer O11 (JA)"));
        test_test.appendChild(set_options("Professional Traditional Web Developer O11 (PT)"));
        test_test.appendChild(set_options("Security Specialist O11 (EN)"));
        test_test.appendChild(set_options("Security Specialization"));
    }
    else if (event.target.value == "Pediatric Nursing Certification Board") {
        test_test.appendChild(set_options("Certified Pediatric Nurse"));
        test_test.appendChild(set_options("Certified Pediatric Nurse Practitioner-Acute Care"));
        test_test.appendChild(set_options("Certified Pediatric Nurse Practitioner-Primary Care"));
        test_test.appendChild(set_options("Pediatric Primary Care Mental Health Specialist Exam"));
    }
    else if (event.target.value == "PeopleCert") {
        test_test.appendChild(set_options("COBIT?? 5 Foundation"));
        test_test.appendChild(set_options("DevOps Fundamentals"));
        test_test.appendChild(set_options("DevOps Leadership"));
        test_test.appendChild(set_options("ITIL 4 Foundation Chinese"));
        test_test.appendChild(set_options("ITIL 4 Foundation English"));
        test_test.appendChild(set_options("ITIL 4 Foundation German"));
        test_test.appendChild(set_options("ITIL 4 Foundation Spanish"));
        test_test.appendChild(set_options("Lean IT Foundation"));
        test_test.appendChild(set_options("Lean Six Sigma Black Belt"));
        test_test.appendChild(set_options("Lean Six Sigma Green Belt"));
        test_test.appendChild(set_options("Lean Six Sigma Yellow Belt"));
        test_test.appendChild(set_options("PRINCE2?? (6th Ed) Foundation English"));
        test_test.appendChild(set_options("PRINCE2?? (6th Ed) Foundation German"));
        test_test.appendChild(set_options("PRINCE2?? (6th Ed) Foundation Polish"));
        test_test.appendChild(set_options("Quality Software Development Foundation"));
        test_test.appendChild(set_options("Quality Software Development Foundation (Java)"));
        test_test.appendChild(set_options("Scrum Master I"));
        test_test.appendChild(set_options("Scrum Master II"));
    }
    else if (event.target.value == "Non-Eligibility Remote Compatibility Check") {
        test_test.appendChild(set_options("Remote Proctoring Demo Examination (Pharmacists)"));
        test_test.appendChild(set_options("Remote Proctoring Demo Examination (Pharmacy Technician)"));
        test_test.appendChild(set_options("Surveillance ?? distance : examen simul?? (pharmaciens)"));
        test_test.appendChild(set_options("Surveillance ?? distance : examen simul?? (tech pharm)"));
    }
    else if (event.target.value == "Pharmacy Examining Board of Canada") {
        test_test.appendChild(set_options("Examen d'aptitude (techniciens en pharmacie) - Partie I (QCM)"));
        test_test.appendChild(set_options("Examen d'aptitude (pharmaciens) -  Partie I (QCM)"));
        test_test.appendChild(set_options("Examen d'??valuation (pharmaciens)"));
        test_test.appendChild(set_options("Pharmacist Evaluating Examination"));
        test_test.appendChild(set_options("Pharmacist Qualifying Examination Part I (MCQ)"));
        test_test.appendChild(set_options("Pharmacy Technician Qualifying Examination Part I (MCQ)"));
        test_test.appendChild(set_options("Pretest for Pharmacist Evaluating Examination"));
    }
    else if (event.target.value == "PROC") {
        test_test.appendChild(set_options("CIPM - DEMO"));
    }
    else if (event.target.value == "Product Development Management Association") {
        test_test.appendChild(set_options("New Product Development Professional Certification (Chinese)"));
        test_test.appendChild(set_options("New Product Development Professional Certification (English)"));
        test_test.appendChild(set_options("New Product Development Professional Certification (Indones)"));
    }
    else if (event.target.value == "Arizona Cosmetology") {
        test_test.appendChild(set_options("Cosmetology Theory Examination English"));
        test_test.appendChild(set_options("Cosmetology Theory Examination Korean"));
        test_test.appendChild(set_options("Cosmetology Theory Examination Spanish"));
        test_test.appendChild(set_options("Cosmetology Theory Examination Vietnamese"));
        test_test.appendChild(set_options("Esthetics Theory Examination English"));
        test_test.appendChild(set_options("Esthetics Theory Examination Korean"));
        test_test.appendChild(set_options("Esthetics Theory Examination Spanish"));
        test_test.appendChild(set_options("Esthetics Theory Examination Vietnamese"));
        test_test.appendChild(set_options("Hair Design Theory Examination English"));
        test_test.appendChild(set_options("Hair Design Theory Examination Korean"));
        test_test.appendChild(set_options("Hair Design Theory Examination Spanish"));
        test_test.appendChild(set_options("Hair Design Theory Examination Vietnamese"));
        test_test.appendChild(set_options("Instructor Theory Examination English"));
        test_test.appendChild(set_options("Instructor Theory Examination Korean"));
        test_test.appendChild(set_options("Instructor Theory Examination Spanish"));
        test_test.appendChild(set_options("Instructor Theory Examination Vietnamese"));
        test_test.appendChild(set_options("Nail Technology Theory Examination English"));
        test_test.appendChild(set_options("Nail Technology Theory Examination Korean"));
        test_test.appendChild(set_options("Nail Technology Theory Examination Spanish"));
        test_test.appendChild(set_options("Nail Technology Theory Examination Vietnamese"));
    }
    else if (event.target.value == "AAET The Nerve Conduction Association") {
        test_test.appendChild(set_options("AAET National Registry Exam for Nerve Conduction Studies"));
    }
    else if (event.target.value == "ABOP") {
        test_test.appendChild(set_options("The American Board of Orofacial Pain Certification exam"));
    }
    else if (event.target.value == "ABRET Neurodiagnostic Credentialing and Accreditation") {
        test_test.appendChild(set_options("Cert Exam in Neurophysiologic Intraoperative"));
        test_test.appendChild(set_options("Certification Examination for Autonomic Professionals"));
        test_test.appendChild(set_options("Certification Examination in Long Term Monitoring"));
        test_test.appendChild(set_options("Registration Exam for Electroencephalographic Technologists"));
        test_test.appendChild(set_options("Registration Examination for Evoked Potential Technologists"));
    }
    else if (event.target.value == "ACCE Healthcare Technology Certification Commission") {
        test_test.appendChild(set_options("Examination for Certification in Clinical Engineering"));
    }
    else if (event.target.value == "AIS Certification Board") {
        test_test.appendChild(set_options("Certification Examination for AIS Coding Specialists"));
    }
    else if (event.target.value == "American Board of Clinical Neurophysiology") {
        test_test.appendChild(set_options("ABCN Certification Exam Part I"));
        test_test.appendChild(set_options("ABCN Certification Exam Part II: Epilepsy Monitoring"));
        test_test.appendChild(set_options("ABCN Certification Exam Part II: Generalist"));
        test_test.appendChild(set_options("ABCN Certification Exam Part II: Intraoperative Monitoring"));
        test_test.appendChild(set_options("ABCN Certification Exam Part II: Pediatric EEG"));
        test_test.appendChild(set_options("ABCN Certification Examination Part II: CC-EEG"));
    }
    else if (event.target.value == "American Board of Clinical Pharmacology, Inc.") {
        test_test.appendChild(set_options("Applied Pharmacology Certifying Examination"));
        test_test.appendChild(set_options("Clinical Pharmacology Certifying Examination"));
    }
    else if (event.target.value == "American Board of Multiple Specialties in Podiatry") {
        test_test.appendChild(set_options("Foot and Ankle Surgery Certification Examination"));
        test_test.appendChild(set_options("Prevention & Treatment of Diabetic Foot Wounds Cert Exam"));
        test_test.appendChild(set_options("Primary Care in Podiatric Medicine Certification Examination"));
    }
    else if (event.target.value == "American Board of Neurophysiologic Monitoring") {
        test_test.appendChild(set_options("Certification Exam in Neurophysiologic Monitoring Part I"));
    }
    else if (event.target.value == "American Board of Spine Surgery") {
        test_test.appendChild(set_options("Part I Written Examination American Board of Spine Surgery"));
    }
    else if (event.target.value == "American Board of Wound Medicine and Surgery") {
        test_test.appendChild(set_options("Cert Exam for Physicians in Wound Medicine & Surgery"));
    }
    else if (event.target.value == "American Hippotherapy Certification Board") {
        test_test.appendChild(set_options("Hippotherapy Certification Examination"));
        test_test.appendChild(set_options("Hippotherapy Clinical Specialist Certification Examination"));
    }
    else if (event.target.value == "American Hypertension Specialist Certification Program") {
        test_test.appendChild(set_options("Examination for Certified Hypertension Clinician"));
        test_test.appendChild(set_options("Examination for Certified Hypertension Specialist"));
    }
    else if (event.target.value == "Aromatherapy Registration Council") {
        test_test.appendChild(set_options("Registration Examination in Aromatherapy"));
    }
    else if (event.target.value == "Association for Strategic Planning") {
        test_test.appendChild(set_options("Strategic Management Professional Level II"));
        test_test.appendChild(set_options("Strategic Planning Professional Level I"));
    }
    else if (event.target.value == "Association of Marital and Family Therapy Regulatory Boards") {
        test_test.appendChild(set_options("Marital and Family Therapy National Examination"));
    }
    else if (event.target.value == "Board of Behavioral Sleep Medicine") {
        test_test.appendChild(set_options("Behavioral Sleep Medicine Certification Examination"));
    }
    else if (event.target.value == "Canadian Board of Registration of EEG Technologists") {
        test_test.appendChild(set_options("CBRET Written Examination"));
    }
    else if (event.target.value == "Certification Board for Equine Interaction Professionals") {
        test_test.appendChild(set_options("Cert Exam for Equine Interaction Professionals - MH"));
    }
    else if (event.target.value == "Certification Council for Professional Dog Trainers") {
        test_test.appendChild(set_options("Examination for Certified Behavior Consultant Canine -KA"));
        test_test.appendChild(set_options("Examination for Certified Professional Dog Trainer-KA"));
    }
    else if (event.target.value == "Certified Nurse Life Care Planners Certification Board") {
        test_test.appendChild(set_options("Certification Examination for Nurse Life Care Planners"));
    }
    else if (event.target.value == "Certified Physician Life Care Planner Certification Board") {
        test_test.appendChild(set_options("Certification Examination for Physician Life Care Planners"));
    }
    else if (event.target.value == "Commission on Paraoptometric Certification") {
        test_test.appendChild(set_options("Certified Paraoptometric Assistant Examination"));
        test_test.appendChild(set_options("Certified Paraoptometric Coding Examination"));
        test_test.appendChild(set_options("Certified Paraoptometric Examination"));
        test_test.appendChild(set_options("Certified Paraoptometric Technician Exam Part 1: Written"));
        test_test.appendChild(set_options("Certified Paraoptometric Technician Exam Part 2: Clinical"));
    }
    else if (event.target.value == "Consortium of Multiple Sclerosis Centers") {
        test_test.appendChild(set_options("Certification Examination in Rare Neuroimmunologic Disorders"));
        test_test.appendChild(set_options("Multiple Sclerosis Healthcare Associate Certification Exam"));
        test_test.appendChild(set_options("Multiple Sclerosis Specialist Certification Exam"));
    }
    else if (event.target.value == "Corporate Housing Providers Association") {
        test_test.appendChild(set_options("Corporate Housing Professional Certification Examination"));
    }
    else if (event.target.value == "Culinary Medicine Specialist Board") {
        test_test.appendChild(set_options("Examination for Certified Culinary Medicine Specialists"));
    }
    else if (event.target.value == "Eye Bank Association of America") {
        test_test.appendChild(set_options("Certifying Examination for Eye Bank Technicians"));
    }
    else if (event.target.value == "Global Business Travel Association") {
        test_test.appendChild(set_options("Global Travel Professional (GTP) Certification Examination"));
    }
    else if (event.target.value == "Immunoglobulin National Society") {
        test_test.appendChild(set_options("Imunoglobulin Certified Nurse Examination"));
        test_test.appendChild(set_options("Imunoglobulin Certified Pharmacist Examination"));
    }
    else if (event.target.value == "International Avian/Animal Trainers Certification Board") {
        test_test.appendChild(set_options("Certification Examination for Professional Animal Trainers"));
        test_test.appendChild(set_options("Certification Examination for Professional Bird Trainers"));
    }
    else if (event.target.value == "International Foundation for Retirement Education") {
        test_test.appendChild(set_options("Certified Retirement Counselor Examination"));
    }
    else if (event.target.value == "Multiple Sclerosis Nursing Certification Board") {
        test_test.appendChild(set_options("Multiple Sclerosis Nursing International Certification Exam"));
    }
    else if (event.target.value == "National Academy of Certified Care Managers") {
        test_test.appendChild(set_options("Care Manager Certification Examination"));
    }
    else if (event.target.value == "National Board of Nutrition Support Certification") {
        test_test.appendChild(set_options("Certification Examination for Nutrition Support Clinicians"));
    }
    else if (event.target.value == "National Board of Physician Nutrition Specialists") {
        test_test.appendChild(set_options("Certification Exam for Physician Nutrition Specialists"));
    }
    else if (event.target.value == "National Certifying Board for Ophthalmic Registered Nurses") {
        test_test.appendChild(set_options("Certification Examination for Ophthalmic Registered Nurses"));
    }
    else if (event.target.value == "National Emergency Number Association") {
        test_test.appendChild(set_options("Emergency Number Professional Certification Examination"));
    }
    else if (event.target.value == "Nat'l Board for Cert of Orthopedic Physician's Assistants") {
        test_test.appendChild(set_options("Certification Exam for Orthopedic Physician Assistants"));
    }
    else if (event.target.value == "Nat'l Cert Board of Otorhinolaryngology & Head-Neck Nurses") {
        test_test.appendChild(set_options("Cert Exam in Otorhinolaryngology & Head-Neck Nursing"));
    }
    else if (event.target.value == "North American Registry of Midwives") {
        test_test.appendChild(set_options("NARM Examination"));
    }
    else if (event.target.value == "Professional Animal Care Certification Council") {
        test_test.appendChild(set_options("Certified Professional Animal Care Manager Examination"));
        test_test.appendChild(set_options("Certified Professional Animal Care Operator Examination"));
        test_test.appendChild(set_options("Certified Professional Animal Care Provider Examination"));
    }
    else if (event.target.value == "Research Administrators Certification Council") {
        test_test.appendChild(set_options("Certification Exam for Financial Research Administrators"));
        test_test.appendChild(set_options("Certification Exam for Pre-Award Research Administrators"));
        test_test.appendChild(set_options("Certification Examination for Research Administrators"));
    }
    else if (event.target.value == "Society for Marketing Professional Services") {
        test_test.appendChild(set_options("Certified Professional Services Marketer Examination"));
    }
    else if (event.target.value == "World Pet Association") {
        test_test.appendChild(set_options("Professional Grooming Credential Exam"));
    }
    else if (event.target.value == "National Placement and Referral Alliance") {
        test_test.appendChild(set_options("Certified Placement and Referral Specialist"));
    }
    else if (event.target.value == "Prometric Test Drive") {
        test_test.appendChild(set_options("Prometric Test Drive"));
    }
    else if (event.target.value == "Prometric English Language Proficiency Program") {
        test_test.appendChild(set_options("Prometric English Language Proficiency Demo Exam"));
        test_test.appendChild(set_options("Prometric English Language Proficiency Exam"));
    }
    else if (event.target.value == "Public Relations Uni Acrd Board") {
        test_test.appendChild(set_options("BETA"));
        test_test.appendChild(set_options("Certificate In Principles of Public Relations Exam"));
        test_test.appendChild(set_options("EXAM FOR ACCRED IN PUBLIC RELATIONS"));
    }
    else if (event.target.value == "Qualcomm Certification") {
        test_test.appendChild(set_options("Qualcomm 5G Training: 5G Associate Certification"));
        test_test.appendChild(set_options("Qualcomm 5G Training: 5G Introductory Certification"));
    }
    else if (event.target.value == "QuantInsti Quantitative Learning Private Limited") {
        test_test.appendChild(set_options("Certificate In Sentiment Analysis And Alt Data For Finance"));
        test_test.appendChild(set_options("EPAT News Sentiment and Alternative Data"));
        test_test.appendChild(set_options("Executive Programme in Algorithmic Trading"));
    }
    else if (event.target.value == "Rehabilitation Engineering and Assistive Technology Society") {
        test_test.appendChild(set_options("Assistive Technology Professional"));
        test_test.appendChild(set_options("Assistive Technology Professional - UTD"));
        test_test.appendChild(set_options("Assistive Technology Professional Practice Exam"));
        test_test.appendChild(set_options("Seating and Mobility Specialist"));
    }
    else if (event.target.value == "Saudi Licencing Examination") {
        test_test.appendChild(set_options("Anatomic Pathology"));
        test_test.appendChild(set_options("Anesthesia"));
        test_test.appendChild(set_options("Biochemistry Technician exams"));
        test_test.appendChild(set_options("Biomedical Technology Specialist"));
        test_test.appendChild(set_options("Cardiac Perfusion"));
        test_test.appendChild(set_options("Cardiology"));
        test_test.appendChild(set_options("Cardiothoracic Surgery"));
        test_test.appendChild(set_options("Chinese Acupuncture and Moxibustion Exam"));
        test_test.appendChild(set_options("Clinical Coding Exam"));
        test_test.appendChild(set_options("Clinical Pathology"));
        test_test.appendChild(set_options("Clinical Psychology"));
        test_test.appendChild(set_options("Critical Care Medicine"));
        test_test.appendChild(set_options("Dental Hygiene Exam"));
        test_test.appendChild(set_options("Dental Hygiene Specialist"));
        test_test.appendChild(set_options("Dental Lab Technician"));
        test_test.appendChild(set_options("Dental Lab Technologist"));
        test_test.appendChild(set_options("Dermatology"));
        test_test.appendChild(set_options("Diagnostic Radiology Exam"));
        test_test.appendChild(set_options("EMT Basic"));
        test_test.appendChild(set_options("Electrocardiography"));
        test_test.appendChild(set_options("Emergency Medicine"));
        test_test.appendChild(set_options("Endocrinology"));
        test_test.appendChild(set_options("Endodontics"));
        test_test.appendChild(set_options("Family Medicine"));
        test_test.appendChild(set_options("Forensic Medicine"));
        test_test.appendChild(set_options("Gastroenterology Exam"));
        test_test.appendChild(set_options("General Surgery"));
        test_test.appendChild(set_options("Genomic & Biotechnology"));
        test_test.appendChild(set_options("Health Care Assistant Qualifying Exam"));
        test_test.appendChild(set_options("Hematology and Oncology"));
        test_test.appendChild(set_options("Internal Medicine"));
        test_test.appendChild(set_options("Lab Tech"));
        test_test.appendChild(set_options("Lab Technologist Exam"));
        test_test.appendChild(set_options("Laboratory - Clinical Biochemistry"));
        test_test.appendChild(set_options("Laboratory - Hematology"));
        test_test.appendChild(set_options("Laboratory - Microbiology"));
        test_test.appendChild(set_options("Massage Therapy Exam"));
        test_test.appendChild(set_options("Medical Assistant Exam (Arabic)"));
        test_test.appendChild(set_options("Medical Microbiology"));
        test_test.appendChild(set_options("Medical Records (Arabic) Exam"));
        test_test.appendChild(set_options("Microbiology Technician Exam"));
        test_test.appendChild(set_options("Midwifery"));
        test_test.appendChild(set_options("Nephrology"));
        test_test.appendChild(set_options("Neurology"));
        test_test.appendChild(set_options("Neurosurgery"));
        test_test.appendChild(set_options("Nuclear Medicine Technologist"));
        test_test.appendChild(set_options("Nurse Technician"));
        test_test.appendChild(set_options("Nursing Health Assistant Exam"));
        test_test.appendChild(set_options("Obstetrics and Gynecology"));
        test_test.appendChild(set_options("Occupational Therapy Specialist"));
        test_test.appendChild(set_options("Occupational Therapy Technician"));
        test_test.appendChild(set_options("Ophthalmology"));
        test_test.appendChild(set_options("Oral & Maxillofacial Surgery"));
        test_test.appendChild(set_options("Oral Surgery"));
        test_test.appendChild(set_options("Orthodentics"));
        test_test.appendChild(set_options("Orthopedic Surgery"));
        test_test.appendChild(set_options("Orthotics and Prosthetics Specialist"));
        test_test.appendChild(set_options("Orthotics and Prosthetics Technician"));
        test_test.appendChild(set_options("Otorhinolaryngology"));
        test_test.appendChild(set_options("PAS POC1"));
        test_test.appendChild(set_options("Pediatric Dentistry"));
        test_test.appendChild(set_options("Pediatric Surgery"));
        test_test.appendChild(set_options("Pediatrics"));
        test_test.appendChild(set_options("Periodontics"));
        test_test.appendChild(set_options("Physical Therapy Assistant"));
        test_test.appendChild(set_options("Physical Therapy Specialist"));
        test_test.appendChild(set_options("Plastic Surgery"));
        test_test.appendChild(set_options("Preventive Medicine"));
        test_test.appendChild(set_options("Prostodentics"));
        test_test.appendChild(set_options("Psychiatry Exam"));
        test_test.appendChild(set_options("Pulmonary Exam"));
        test_test.appendChild(set_options("Rehabilitation Medicine"));
        test_test.appendChild(set_options("Renal Dialysis Technician Exam"));
        test_test.appendChild(set_options("Restorative Dentistry"));
        test_test.appendChild(set_options("Rheumatology"));
        test_test.appendChild(set_options("SCFHS Saudi Dental Licensing Exam (Practice)"));
        test_test.appendChild(set_options("SCFHS Saudi Laboratory Specialist Licensure Exam (Practice)"));
        test_test.appendChild(set_options("SCFHS Saudi Medical Licensing Exam (Practice)"));
        test_test.appendChild(set_options("SCFHS Saudi Nursing Licensing Exam (Practice)"));
        test_test.appendChild(set_options("SCFHS Saudi Pharmacist Licensing Exam (Practice)"));
        test_test.appendChild(set_options("Saudi Clinical Nutrition Licensing Examination"));
        test_test.appendChild(set_options("Saudi Dental Licensing Exam"));
        test_test.appendChild(set_options("Saudi Laboratory Specialist Licensure Examination"));
        test_test.appendChild(set_options("Saudi Medical Licensing Exam"));
        test_test.appendChild(set_options("Saudi Nursing Licensing Exam"));
        test_test.appendChild(set_options("Saudi Pharmacist Licensing Exam"));
        test_test.appendChild(set_options("Saudi Public Health Licensing Examination"));
        test_test.appendChild(set_options("Saudi Radiologic Technologist Licensure Exam-  (Practice)"));
        test_test.appendChild(set_options("Saudi Radiologic Technologist Licensure Examination"));
        test_test.appendChild(set_options("Saudi Respiratory Care Licensure Examination"));
        test_test.appendChild(set_options("Saudi Respiratory Care Licensure Examination (Practice)"));
        test_test.appendChild(set_options("Sports Medicine"));
        test_test.appendChild(set_options("UTD POC2"));
        test_test.appendChild(set_options("Urology"));
        test_test.appendChild(set_options("Vascular Surgery"));
    } else if (event.target.value == "SCHS Promotion Exams") {
        test_test.appendChild(set_options("Obstetrics and Gynecology"));
        test_test.appendChild(set_options("Obstetrics and Gynecology"));
    } else if (event.target.value == "Secuencias de cursos verificados de ABA Espana") {
        test_test.appendChild(set_options("Examen Final de ABA Espana"));
    } else if (event.target.value == "Sharjah Health Authority") {
        test_test.appendChild(set_options("Acupuncture Practitioner"));
        test_test.appendChild(set_options("Ayurveda Massage Therapist"));
        test_test.appendChild(set_options("Ayurveda Practitioner"));
        test_test.appendChild(set_options("Biochemistry Exam"));
        test_test.appendChild(set_options("Chinese Massage Therapist"));
        test_test.appendChild(set_options("Chiropractor Practitioner"));
        test_test.appendChild(set_options("Cupping (Hijama) Therapist"));
        test_test.appendChild(set_options("Cupping (Hijama) Therapist (Arabic)"));
        test_test.appendChild(set_options("Dermatology"));
        test_test.appendChild(set_options("Family Medicine"));
        test_test.appendChild(set_options("General Dentist"));
        test_test.appendChild(set_options("General practitioner"));
        test_test.appendChild(set_options("Hematology Exam"));
        test_test.appendChild(set_options("Herbal Medicine/ Oriental Medicine"));
        test_test.appendChild(set_options("Homeopathy"));
        test_test.appendChild(set_options("Internal Medicine"));
        test_test.appendChild(set_options("Lab Specialist"));
        test_test.appendChild(set_options("Lab Technician"));
        test_test.appendChild(set_options("Microbiology technologist"));
        test_test.appendChild(set_options("Naturopathy"));
        test_test.appendChild(set_options("Nurse Exam"));
        test_test.appendChild(set_options("Obstetrics & Gynecology"));
        test_test.appendChild(set_options("Ophthalmology"));
        test_test.appendChild(set_options("Orthopedics"));
        test_test.appendChild(set_options("Osteopathy"));
        test_test.appendChild(set_options("Pediatrics"));
        test_test.appendChild(set_options("Pharmacist"));
        test_test.appendChild(set_options("Physiotherapist"));
        test_test.appendChild(set_options("Radiographer Exam"));
        test_test.appendChild(set_options("Registered  Midwife"));
        test_test.appendChild(set_options("Traditional Chinese Medicine"));
        test_test.appendChild(set_options("Unani Practitioner"));
    } else if (event.target.value == "Association of Clinical Documentation Integrity Specialists") {
        test_test.appendChild(set_options("Certified Clinical Documentation Specialist"));
        test_test.appendChild(set_options("Certified Clinical Documentation Specialist-Outpatient"));
    } else if (event.target.value == "Association of Home Care Coding & Compliance") {
        test_test.appendChild(set_options("Home Care Clinical Specialist-OASIS"));
        test_test.appendChild(set_options("Home Care Coding Specialist-Diagnosis"));
        test_test.appendChild(set_options("Home Care Coding Specialist-Hospice"));
    } else if (event.target.value == "National Association of Healthcare Revenue Integrity") {
        test_test.appendChild(set_options("Certification in Healthcare Revenue Integrity"));
    } else if (event.target.value == "SOA") {
        test_test.appendChild(set_options("Advanced Long-Term Actuarial Mathematics"));
        test_test.appendChild(set_options("Advanced Short-Term Actuarial Mathematics"));
        test_test.appendChild(set_options("Advanced Topics in General Insurance Exam"));
        test_test.appendChild(set_options("ERM Exam - General Corporate"));
        test_test.appendChild(set_options("ERM Exam - General Insurance"));
        test_test.appendChild(set_options("ERM Exam - Group and Health"));
        test_test.appendChild(set_options("ERM Exam - Individual Life and Annuities"));
        test_test.appendChild(set_options("ERM Exam Investment"));
        test_test.appendChild(set_options("ERM Exam Retirement"));
        test_test.appendChild(set_options("Enrolled Actuaries Basic Examination"));
        test_test.appendChild(set_options("Financial Mathematics: English or French/Canada"));
        test_test.appendChild(set_options("Financial Mathematics: English, U.S./Intl"));
        test_test.appendChild(set_options("Financial and Regulatory Environment Exam, U.S."));
        test_test.appendChild(set_options("Foundations of CFE Exam"));
        test_test.appendChild(set_options("Fundamentals of Actuarial Mathematics"));
        test_test.appendChild(set_options("Fundamentals of Actuarial Mathematics - Long Term"));
        test_test.appendChild(set_options("Fundamentals of Actuarial Mathematics - Short Term"));
        test_test.appendChild(set_options("GH Design and Pricing"));
        test_test.appendChild(set_options("GH Finance and Valuation Exam - Canada"));
        test_test.appendChild(set_options("GH Finance and Valuation Exam - U.S."));
        test_test.appendChild(set_options("Group and Health Specialty Exam"));
        test_test.appendChild(set_options("ILA Life ALM and Modeling Exam"));
        test_test.appendChild(set_options("ILA Life Financial Management Exam, Canada"));
        test_test.appendChild(set_options("ILA Life Financial Management Exam, U.S."));
        test_test.appendChild(set_options("ILA Life Product Management Exam"));
        test_test.appendChild(set_options("Investment & Financial Markets: English or French/Canada"));
        test_test.appendChild(set_options("Investment & Financial Markets: English, U.S./Intl"));
        test_test.appendChild(set_options("Pension EA-2, Segment F Examination"));
        test_test.appendChild(set_options("Pension EA-2, Segment L Examination"));
        test_test.appendChild(set_options("Predictive Analytics: English or French/Canada"));
        test_test.appendChild(set_options("Predictive Analytics: English, U.S./Intl"));
        test_test.appendChild(set_options("Probability: English or French/Canada"));
        test_test.appendChild(set_options("Probability: English, U.S./Intl"));
        test_test.appendChild(set_options("QFI Investment Risk Management Exam"));
        test_test.appendChild(set_options("QFI Portfolio Management Exam"));
        test_test.appendChild(set_options("QFI Quantitative Finance Exam"));
        test_test.appendChild(set_options("Ratemaking & Reserving Exam"));
        test_test.appendChild(set_options("Retirement Design & Accounting Exam, Canada"));
        test_test.appendChild(set_options("Retirement Design & Accounting Exam, U.S."));
        test_test.appendChild(set_options("Retirement Funding & Regulation Exam, Canada"));
        test_test.appendChild(set_options("Retirement Plan Investment and Risk Management Exam"));
        test_test.appendChild(set_options("Statistics for Risk Modeling: English or French/Canada"));
        test_test.appendChild(set_options("Statistics for Risk Modeling: English, U.S./Intl"));
        test_test.appendChild(set_options("Strategic Decision-Making Exam"));
    } else if (event.target.value == "Society for Human Resource Management") {
        test_test.appendChild(set_options("SHRM Certified Professional (in the US)"));
        test_test.appendChild(set_options("SHRM Certified Professional (outside the US)"));
        test_test.appendChild(set_options("SHRM Certified Professional In Person Only"));
        test_test.appendChild(set_options("SHRM Senior Certified Professional (in the US)"));
        test_test.appendChild(set_options("SHRM Senior Certified Professional (outside the US)"));
        test_test.appendChild(set_options("SHRM Senior Certified Professional In Person Only"));
    } else if (event.target.value == "Society for Worldwide Interbank Financial Telecommunication") {
        test_test.appendChild(set_options("Alliance Integration Platform Certification"));
        test_test.appendChild(set_options("SWIFT On-Boarding"));
        test_test.appendChild(set_options("SWIFTNet Connectivity"));
        test_test.appendChild(set_options("SWIFTNet Messaging"));
    } else if (event.target.value == "SSAT by The Enrollment Management Association") {
        test_test.appendChild(set_options("SSAT Middle Grades"));
        test_test.appendChild(set_options("SSAT Upper Grades"));
    } else if (event.target.value == "ELIGIBILITY EXAMS") {
        test_test.appendChild(set_options("No FEES"));
    } else if (event.target.value == "NON-ELIG") {
        test_test.appendChild(set_options("FEES"));
        test_test.appendChild(set_options("No FEES"));
    } else if (event.target.value == "VOUCHER_EXAM") {
        test_test.appendChild(set_options("VOUCHER_EXAM"));
    } else if (event.target.value == "Abu Dhabi Department of Community Development") {
        test_test.appendChild(set_options("Counseling Psychology"));
        test_test.appendChild(set_options("Counseling Psychology (Arabic)"));
        test_test.appendChild(set_options("Counselling in Social care"));
        test_test.appendChild(set_options("Counselling in Social care Arabic"));
        test_test.appendChild(set_options("Educational/Academic Psychology"));
        test_test.appendChild(set_options("Educational/Academic Psychology (Arabic)"));
        test_test.appendChild(set_options("Forensic Psychology"));
        test_test.appendChild(set_options("Forensic Psychology (Arabic)"));
        test_test.appendChild(set_options("Marriage & Family Psychology"));
        test_test.appendChild(set_options("Marriage & Family Psychology (Arabic)"));
        test_test.appendChild(set_options("Psychologist in Social care"));
        test_test.appendChild(set_options("Psychologist in Social care (Arabic)"));
        test_test.appendChild(set_options("Psychotherapy"));
        test_test.appendChild(set_options("Psychotherapy (Arabic)"));
        test_test.appendChild(set_options("School Psychology"));
        test_test.appendChild(set_options("School Psychology (Arabic)"));
        test_test.appendChild(set_options("Social Worker"));
        test_test.appendChild(set_options("Social Worker (Arabic)"));
    } else if (event.target.value == "UAE Ministry of Health") {
        test_test.appendChild(set_options("Anatomical Pathology"));
        test_test.appendChild(set_options("Anesthesia"));
        test_test.appendChild(set_options("BIOMEDICAL MEDICANE"));
        test_test.appendChild(set_options("Biochemistry Technician"));
        test_test.appendChild(set_options("Biomedical Technology Specialist"));
        test_test.appendChild(set_options("CARDIAC PROFUSION"));
        test_test.appendChild(set_options("Cardiology"));
        test_test.appendChild(set_options("Cardiothoracic Surgery"));
        test_test.appendChild(set_options("Clinical Nutrition"));
        test_test.appendChild(set_options("Clinical Pathology"));
        test_test.appendChild(set_options("Clinical Psychology"));
        test_test.appendChild(set_options("Community Medicine"));
        test_test.appendChild(set_options("Dental Assistant"));
        test_test.appendChild(set_options("Dental Hygiene"));
        test_test.appendChild(set_options("Dental Hygiene Tech"));
        test_test.appendChild(set_options("Dental Lab Tech"));
        test_test.appendChild(set_options("Dental Lab Technologist"));
        test_test.appendChild(set_options("Dermatologist"));
        test_test.appendChild(set_options("Diagnostic Radiology"));
        test_test.appendChild(set_options("Electrocardiography"));
        test_test.appendChild(set_options("Emergency Med Technician"));
        test_test.appendChild(set_options("Emergency Medicine"));
        test_test.appendChild(set_options("Endodontic"));
        test_test.appendChild(set_options("Family Medicine"));
        test_test.appendChild(set_options("Forensic Medicine"));
        test_test.appendChild(set_options("Gastroenterology Doctor"));
        test_test.appendChild(set_options("General Dentistry"));
        test_test.appendChild(set_options("General Practice"));
        test_test.appendChild(set_options("General Surgery"));
        test_test.appendChild(set_options("Healthcare Assistant Qualifying Exam"));
        test_test.appendChild(set_options("Implant Dentistry"));
        test_test.appendChild(set_options("Intensive Care"));
        test_test.appendChild(set_options("Internal Medicine"));
        test_test.appendChild(set_options("Lab Technologist"));
        test_test.appendChild(set_options("Medical Lab Technician"));
        test_test.appendChild(set_options("Medical Microbiology"));
        test_test.appendChild(set_options("Medical Record Arabic"));
        test_test.appendChild(set_options("Microbiology"));
        test_test.appendChild(set_options("Microbiology Technician Exam"));
        test_test.appendChild(set_options("MidWifery"));
        test_test.appendChild(set_options("MidWifery"));
        test_test.appendChild(set_options("Midwife Assistant"));
        test_test.appendChild(set_options("Nephrology"));
        test_test.appendChild(set_options("Neurosurgery"));
        test_test.appendChild(set_options("Nurse Assistance"));
        test_test.appendChild(set_options("Obstetrics & Gynaecology"));
        test_test.appendChild(set_options("Occupational Therapist"));
        test_test.appendChild(set_options("Occupational Therapy Technician"));
        test_test.appendChild(set_options("Ophthalmology"));
        test_test.appendChild(set_options("Oral & Maxillofacial Surgery"));
        test_test.appendChild(set_options("Orthodontics"));
        test_test.appendChild(set_options("Orthopedics"));
        test_test.appendChild(set_options("Orthotics and Prosthetic Technician"));
        test_test.appendChild(set_options("Otolaryngology"));
        test_test.appendChild(set_options("Pediatrics"));
        test_test.appendChild(set_options("Pedodontics"));
        test_test.appendChild(set_options("Periodontics"));
        test_test.appendChild(set_options("Pharmacist"));
        test_test.appendChild(set_options("Pharmacy Tech"));
        test_test.appendChild(set_options("Physical Medicine and Rehabilitation"));
        test_test.appendChild(set_options("Physical Therapy Assistant"));
        test_test.appendChild(set_options("Physiotherapist"));
        test_test.appendChild(set_options("Plastic Surgery"));
        test_test.appendChild(set_options("Prosthodontics"));
        test_test.appendChild(set_options("Psychiatry"));
        test_test.appendChild(set_options("Pulmonology"));
        test_test.appendChild(set_options("Radiographer"));
        test_test.appendChild(set_options("Radiology"));
        test_test.appendChild(set_options("Radiology Tech"));
        test_test.appendChild(set_options("Registered Nurse"));
        test_test.appendChild(set_options("Renal Dialysis Tech"));
        test_test.appendChild(set_options("Restorative and Protective Doctors"));
        test_test.appendChild(set_options("Urology"));
        test_test.appendChild(set_options("Vascular Surgery"));

    } else if (event.target.value == "The Association of Taxation Technicians") {
        test_test.appendChild(set_options("APS Human Capital Taxes"));
        test_test.appendChild(set_options("APS IHT Trusts and Estates"));
        test_test.appendChild(set_options("APS Taxation of Individuals"));
        test_test.appendChild(set_options("APS Taxation of Larger Companies and Groups"));
        test_test.appendChild(set_options("APS Taxation of Owner Managed Businesses"));
        test_test.appendChild(set_options("APS VAT and Other Indirect Taxes"));
        test_test.appendChild(set_options("Law"));
        test_test.appendChild(set_options("Law (Scotland)"));
        test_test.appendChild(set_options("Principles of Accounting CBE"));
        test_test.appendChild(set_options("Professional Responsibilities & Ethics"));
    } else if (event.target.value == "The Chartered Institute of Taxation") {
        test_test.appendChild(set_options("APS Human Capital Taxes"));
        test_test.appendChild(set_options("APS IHT Trusts and Estates"));
        test_test.appendChild(set_options("APS Taxation of Individuals"));
        test_test.appendChild(set_options("APS Taxation of Larger Companies and Groups"));
        test_test.appendChild(set_options("APS Taxation of Owner Managed Businesses"));
        test_test.appendChild(set_options("APS VAT and Other Indirect Taxes"));
        test_test.appendChild(set_options("Law"));
        test_test.appendChild(set_options("Law (Scotland)"));
        test_test.appendChild(set_options("Principles of Accounting CBE"));
        test_test.appendChild(set_options("Professional Responsibilities & Ethics"));
    } else if (event.target.value == "The State Bar of California") {
        test_test.appendChild(set_options("First-Year Law Students' Examination"));
        test_test.appendChild(set_options("First-Year Law Students' Practice Examination"));
        test_test.appendChild(set_options("First-Year Law Students' Test Center Examination"));
    } else if (event.target.value == "CELBAN") {
        test_test.appendChild(set_options("CELBAN"));
    } else if (event.target.value == "Practice CELBAN") {
        test_test.appendChild(set_options("Practice CELBAN"));
    } else if (event.target.value == "Uniform CPA Exam") {
        test_test.appendChild(set_options("AUDITING AND ATTESTATION"));
        test_test.appendChild(set_options("AUDITING AND ATTESTATION (GUAM ONLY)"));
        test_test.appendChild(set_options("Auditing and Attestation (International)"));
        test_test.appendChild(set_options("Auditing and Attestation (International)"));
        test_test.appendChild(set_options("Auditing and Attestation (International)"));
        test_test.appendChild(set_options("Auditing and Attestation (International)"));
        test_test.appendChild(set_options("Auditing and Attestation (International)"));
        test_test.appendChild(set_options("Auditing and Attestation Exam (For TA Use only)"));
        test_test.appendChild(set_options("BUSINESS ENVIRONMENT AND CONCEPTS"));
        test_test.appendChild(set_options("BUSINESS ENVIRONMENT AND CONCEPTS (GUAM ONLY)"));
        test_test.appendChild(set_options("Business Environment and Concepts (International)"));
        test_test.appendChild(set_options("Business Environment and Concepts (International)"));
        test_test.appendChild(set_options("Business Environment and Concepts (International)"));
        test_test.appendChild(set_options("Business Environment and Concepts (International)"));
        test_test.appendChild(set_options("Business Environment and Concepts (International)"));
        test_test.appendChild(set_options("Business Environment and Concepts Exam (For TA Use only)"));
        test_test.appendChild(set_options("CPA Exam Preview"));
        test_test.appendChild(set_options("FINANCIAL ACCOUNTING AND REPORTING"));
        test_test.appendChild(set_options("FINANCIAL ACCOUNTING AND REPORTING (GUAM ONLY)"));
        test_test.appendChild(set_options("Financial Accounting and Reporting (International)"));
        test_test.appendChild(set_options("Financial Accounting and Reporting (International)"));
        test_test.appendChild(set_options("Financial Accounting and Reporting (International)"));
        test_test.appendChild(set_options("Financial Accounting and Reporting (International)"));
        test_test.appendChild(set_options("Financial Accounting and Reporting (International)"));
        test_test.appendChild(set_options("Financial Accounting and Reporting Exam (For TA Use only)"));
        test_test.appendChild(set_options("International Qualification Exam"));
        test_test.appendChild(set_options("REGULATION"));
        test_test.appendChild(set_options("REGULATION (GUAM ONLY)"));
        test_test.appendChild(set_options("Regulation (International)"));
        test_test.appendChild(set_options("Regulation (International)"));
        test_test.appendChild(set_options("Regulation (International)"));
        test_test.appendChild(set_options("Regulation (International)"));
        test_test.appendChild(set_options("Regulation Exam (For TA Use Only)"));
    } else if (event.target.value == "UP2") {
        test_test.appendChild(set_options("Apprentice Diesel Electrician and Diesel Electrician"));
        test_test.appendChild(set_options("Apprentice Diesel Mechanic and Diesel Mechanic"));
        test_test.appendChild(set_options("Apprentice Freight Car Repairer, Freight Car Repairer"));
        test_test.appendChild(set_options("Clerical Test Battery"));
        test_test.appendChild(set_options("Coach Cleaner"));
        test_test.appendChild(set_options("Electronic Technician/Installation Technician"));
        test_test.appendChild(set_options("Mechanical Service Operator (Car)"));
        test_test.appendChild(set_options("Mechanical Service Operator (Locomotive)"));
    } else if (event.target.value == "United States Marshals Service") {
        test_test.appendChild(set_options("THE US MARSHALS SERVICE MERIT PROMOTION EXAM"));
    } else if (event.target.value == "Universal Public Procurement Certification Council") {
        test_test.appendChild(set_options("Certified Professional Public Buyer"));
        test_test.appendChild(set_options("Certified Professional Public Buyer French"));
        test_test.appendChild(set_options("Certified Professional Public Buyer Practice Exams"));
        test_test.appendChild(set_options("Certified Public Procurement Officer"));
        test_test.appendChild(set_options("Certified Public Procurement Officer French"));
        test_test.appendChild(set_options("Certified Public Procurement Officer Practice Exam"));
    } else if (event.target.value == "Pearl Community OR Building Rating System Exam") {
        test_test.appendChild(set_options("Pearl Building Rating System Exam"));
        test_test.appendChild(set_options("Pearl Community Rating System Exam"));
    } else if (event.target.value == "Utah Insurance Department") {
        test_test.appendChild(set_options("Adjusters Accident and Health Exam"));
        test_test.appendChild(set_options("Adjusters Crop Exam"));
        test_test.appendChild(set_options("Adjusters Workers Compensation Exam"));
        test_test.appendChild(set_options("Adjuster's Property and Casualty Exam"));
        test_test.appendChild(set_options("Consultants Accident and Health Exam"));
        test_test.appendChild(set_options("Consultants Casualty Exam"));
        test_test.appendChild(set_options("Consultants Combined Life, Accident and Health Exam"));
        test_test.appendChild(set_options("Consultants Combined Property and Casualty Exam"));
        test_test.appendChild(set_options("Consultants Life Exam"));
        test_test.appendChild(set_options("Consultants Property Exam"));
        test_test.appendChild(set_options("Fingerprint"));
        test_test.appendChild(set_options("Producers Accident and Health Exam"));
        test_test.appendChild(set_options("Producers Casualty Exam"));
        test_test.appendChild(set_options("Producers Combined Life, Accident and Health Exam"));
        test_test.appendChild(set_options("Producers Combined Property and Casualty Exam"));
        test_test.appendChild(set_options("Producers Life Exam"));
        test_test.appendChild(set_options("Producers Personal Lines Exam"));
        test_test.appendChild(set_options("Producers Property Exam"));
        test_test.appendChild(set_options("Producers Title Escrow Exam"));
        test_test.appendChild(set_options("Producers Title Examination Exam"));
        test_test.appendChild(set_options("Producers Title Marketing Representative Exam"));
        test_test.appendChild(set_options("Surplus Lines Producer Exam"));
        test_test.appendChild(set_options("Utah Laws and Regulations Exam"));
    } else if (event.target.value == "Vascular Access Certification Corporation") {
        test_test.appendChild(set_options("Vascular Access Certification"));
    } else if (event.target.value == "Vermont Insurance") {
        test_test.appendChild(set_options("1425 - PROD LIFE"));
        test_test.appendChild(set_options("1427 - PROD ACC, HLTH & HMO"));
        test_test.appendChild(set_options("1429 - PROD LIFE, ACC, HLTH & HMO"));
        test_test.appendChild(set_options("1431 - PROD PC"));
        test_test.appendChild(set_options("1433 - ADJ PC"));
        test_test.appendChild(set_options("1434 - ADJ WORK COMP"));
        test_test.appendChild(set_options("1435 - PROD BAIL BOND"));
        test_test.appendChild(set_options("1437 - MOTOR VEH DMG APPR"));
        test_test.appendChild(set_options("1438 - TITLE"));
        test_test.appendChild(set_options("1439 - PROD PERS LINES"));
        test_test.appendChild(set_options("1441 - PRODUCER'S PROPERTY"));
        test_test.appendChild(set_options("1442 - PRODUCER'S CASUALTY"));
    } else if (event.target.value == "Virginia Department of Insurance") {
        test_test.appendChild(set_options("VA Health Insurance"));
        test_test.appendChild(set_options("VA Life and Annuities Insurance"));
        test_test.appendChild(set_options("VA Life, Annuities and Health Insurance"));
        test_test.appendChild(set_options("VA Personal Lines Insurance"));
        test_test.appendChild(set_options("VA Property and Casualty Insurance"));
        test_test.appendChild(set_options("VA Public Adjuster"));
        test_test.appendChild(set_options("VA Title Insurance"));
    } else if (event.target.value == "Licensing School") {
        test_test.appendChild(set_options("Microsoft Licensing Body of Knowledge 2021"));
    } else if (event.target.value == "TXADj") {
        test_test.appendChild(set_options("TX180"));
    } else if (event.target.value == "WebCE, Inc.") {
        test_test.appendChild(set_options("WebCE 180 minute exam"));
        test_test.appendChild(set_options("WebCE 30 minute exam"));
        test_test.appendChild(set_options("WebCE 60 minute exam"));
        test_test.appendChild(set_options("WebCE 90 minute exam"));
    } else if (event.target.value == "EDGE") {
        test_test.appendChild(set_options("EDGE Bahasa"));
        test_test.appendChild(set_options("EDGE Chinese"));
        test_test.appendChild(set_options("EDGE English"));
        test_test.appendChild(set_options("EDGE Spanish"));
        test_test.appendChild(set_options("EDGE Vietnamese"));
    } else if (event.target.value == "Western Regional Examining Board") {
        test_test.appendChild(set_options("Comprehensive Treatment Plan 2022"));
        test_test.appendChild(set_options("Local Anesthesia Exam 2022"));
    } else if (event.target.value == "UX????????????") {
        test_test.appendChild(set_options("2022 UX????????????"));
    } else if (event.target.value == "??????????????????????????????????????????") {
        test_test.appendChild(set_options("????????????????????????????????????"));
        test_test.appendChild(set_options("????????????????????????????????????"));
        test_test.appendChild(set_options("??????????????????????????????(II???)"));
        test_test.appendChild(set_options("????????????????????????"));
        test_test.appendChild(set_options("????????????????????????"));
        test_test.appendChild(set_options("???????????????????????????"));
        test_test.appendChild(set_options("?????????????????????????????????"));
        test_test.appendChild(set_options("?????????????????????????????????"));
        test_test.appendChild(set_options("???????????????????????????????????????"));
        test_test.appendChild(set_options("???????????????????????????????????????"));
        test_test.appendChild(set_options("?????????????????????????????????"));
        test_test.appendChild(set_options("?????????????????????????????????"));
        test_test.appendChild(set_options("?????????????????????????????????"));
    } else if (event.target.value == "??????????????????????????????????????????????????????)") {
        test_test.appendChild(set_options("??????????????????????????????????????? ???????????????)"));
        test_test.appendChild(set_options("????????????-??????????????????????????? ???????????????)"));
    } else if (event.target.value == "??????????????????????????? (CPWM??) ????????????") {
        test_test.appendChild(set_options("??????????????????????????? (CPWM??) ????????????"));
    } else if (event.target.value == "???????????????") {
        test_test.appendChild(set_options("????????????????????????ACP??????"));
        test_test.appendChild(set_options("?????????????????????????????????ACP??????"));
        test_test.appendChild(set_options("????????????????????????????????????ACP??????"));
        test_test.appendChild(set_options("???????????????????????????ACP??????"));
        test_test.appendChild(set_options("???????????????????????????ACP??????"));
        test_test.appendChild(set_options("???????????????????????????ACP??????"));
        test_test.appendChild(set_options("???????????????????????????ACE??????"));
        test_test.appendChild(set_options("??????????????????????????????ACP??????"));
        test_test.appendChild(set_options("????????????????????????????????????ACP??????"));
        test_test.appendChild(set_options("???????????????????????????ACP??????"));
        test_test.appendChild(set_options("???????????????????????????ACP??????"));
        test_test.appendChild(set_options("????????????????????????????????????ACP??????"));
        test_test.appendChild(set_options("?????????????????????IT???????????????????????????"));
        test_test.appendChild(set_options("??????????????????????????????????????????????????????"));
        test_test.appendChild(set_options("??????????????????????????????????????????????????????"));
        test_test.appendChild(set_options("??????????????????????????????????????????????????????"));
        test_test.appendChild(set_options("??????????????????????????????ACP??????"));
        test_test.appendChild(set_options("???????????????????????????ACP??????"));
    }
});

function rest_checkbox() {
    const select_option_checkbox = document.querySelectorAll("#select_option_checkbox");
    const select_option_radio = document.querySelectorAll("#select_option_radio");

    for (let s = 0; s < select_option_checkbox.length; s++) {
        select_option_checkbox[s].checked = false;
    }

    for (let s = 0; s < select_option_radio.length; s++) {
        select_option_radio[s].checked = false;
    }
}

function select_checkbox(el) {
    radiobtn_value.value = "";
    if (!el.checked) {
        let temp = checkbox_value.value.split("++");
        if (temp.length > 2) {
            let hold = ""
            for (let t = 0; t < temp.length; t++) {
                if (temp[t] != "" && temp[t] != el.value) {
                    hold = hold + temp[t] + "++";
                }
            }
            checkbox_value.value = hold;
        } else {
            checkbox_value.value = "";
            rest_checkbox();
        }
    } else {
        if (el.value.includes("select_all")) {
            checkbox_value.value = "";
            checkbox_value.value = el.value + "++";
            rest_checkbox();
            el.checked = true;
        } else {
            if (checkbox_value.value == "") {
                checkbox_value.value = el.value + "++";
            } else {
                let temp = el.value.split("--");
                hold = temp[1];
                let chk_entries = checkbox_value.value.split("--");
                console.log(chk_entries.length);
                console.log(chk_entries);
                if (checkbox_value.value.includes("--" + hold)) {
                    if (chk_entries.length > 7 && document.getElementById("test_program").value == "National Institute for Automotive Service Excellence"){
                        console.log("Here");
                        window.alert("Error - Total appointment duration should not exceed 6 hour(s) 30 minutes. Please try again with fewer exams.");
                        el.checked = false;
                    }else if(chk_entries.length > 4 && document.getElementById("test_program").value == "FINRA"){
                        window.alert("Error - Total appointment duration should not exceed 11 hour(s) 30 minutes. Please try again with fewer exams.");
                        el.checked = false;
                    }else{
                        checkbox_value.value = checkbox_value.value + el.value + "++";
                    }
                } else {
                    rest_checkbox();
                    el.checked = true;
                    checkbox_value.value = "";
                    checkbox_value.value = el.value + "++";
                }
            }
        }
    }
}

function select_radiobtn(el) {
    checkbox_value.value = "";
    radiobtn_value.value = "";
    rest_checkbox();
    radiobtn_value.value = el.value;
    el.checked = true;

}


