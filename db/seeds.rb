# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

userCnt = 1
projectCnt = 1
stepCnt = 1
favoritesCnt = 1

Api::User.create!(email:"guest@flow-diy.com", password:"flow-diy");
Api::Picture.create!(
  imageable_id: userCnt,
  imageable_type: "Api::User",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462521499/benjaminfranklin_r2qrma.jpg"
)

userCnt += 1

Api::User.create!(email:"rod@flow-diy.com", password:"1");
Api::Picture.create!(
  imageable_id: userCnt,
  imageable_type: "Api::User",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462551422/profile.jpg"
)

userCnt += 1

#user 3
Api::User.create!(email:"mc2@flow-diy.com", password:"flow-diy");
Api::Picture.create!(
  imageable_id: userCnt,
  imageable_type: "Api::User",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462516614/Albert_Einstein_Head_koi8c4.jpg"
)

userCnt += 1

# Project 1
Api::Project.create!(title:"How to design an enclosure using the Laser cutter in the Engineering College maker space", author_id:2)

Api::Picture.create!(
  imageable_id: projectCnt,
  imageable_type:"Api::Project",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1461881506/ValvanoHat_lsjuwe.jpg"
)

Api::Step.create!(
  order: 1,
  title:"Background",
  body:"1) Get trained on the Full Spectrum Hobby and Pro Laser Cutters, http://makerspace.engr.utexas.edu/
  2) Download and install the Retina Engrave Software on your laptop from http://www.fullspectrumengineering.com/RetinaEngraveProtected.html
  3) Download and install PCB artist from www.4pcb.com/free-pcb-layout-software",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1461880724/image002_odhuyf.jpg",
  caption:"Figure 1A. Lab3Box"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1461880730/image004_gnmnn5.jpg",
  caption:"Figure 1B. Lab9Box"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1461880733/image006_lytd3o.jpg",
  caption:"Figure 1C. WoodBox"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1461880747/image008_bxd1bi.jpg",
  caption: "Figure 1D. WoodBox2"
)

stepCnt += 1


Api::Step.create!(
  order: 2,
  title:"Planning",
  body:"Choose whether you wish to build the box out of acrylic or wood, and obtain the raw material so you can double check its thickness. Download the box starter file specific for that material, and which best matches your needs. The sizes in this list are the inside dimensions of the enclosure http://users.ece.utexas.edu/~valvano/MakerBox.zip

  Lab3Box.pcb is a 4.08 by 3.04 by 1.04 inch box, 80 mil acrylic, 8 by 8 inch raw material.
  Lab9Box.pcb is a 3.92 by 2.4 by 0.72 inch box, 80 mil acrylic, 8 by 8 inch raw material.
  CirqoidBox.pcb is a 4.10 by 3.10 by 1.00 inch box, 100 mil acrylic, 8 by 8 inch raw material.
  WoodBox.pcb is a 4.00 by 2.5 by 0.75 inch box, 125 mil wood, 6.5 by 9.5 inch raw material.
  WoodBox2.pcb is a 4.00 by 2.5 by 0.75 inch box, 125 mil wood, 6 by 8.5 inch raw material.
  Lab3Box93.pcb is a 4.65 by 2.418 by 1.488 inch box, 93 mil acrylic, 9.3 by 8 inch raw material
  Lab3Box93square.pcb is a 4.65 by 2.418 by 1.488 inch box, 93 mil acrylic, 9.3 by 8 inch raw material
  Lab10Box93.pcb is a 5.58 by 2.976 by 0.93  inch box, 93 mil acrylic, 10.4 by 8 inch raw material

  For the 80 mil acrylic all slots are down-sized to 70 mil so the pieces will fit snugly. For the 93 mil acrylic all slots are down-sized to 84 mil so the pieces will fit snugly. For the 100 mil acrylic all slots are down-sized to 90 mil so the pieces will fit snugly. For the 125 mil wood all slots are sized to 115 mil. The board outline layer can be used to determine the amount of raw material needed.",
  project_id: projectCnt
)

stepCnt += 1


Api::Step.create!(
  order: 3,
  title:"PCB Enclosure",
  body:"You can design your box with the same application with which you designed your PCB. I used PCB Artist for these examples. Open the appropriate starter file and print all layers of the existing starter file at 100%. Find some cardboard that has a thickness approximately equal to your final material. Glue the paper printout to the cardboard, and cut out the pieces. This step is important for you to visualize how the six parts designed in two dimensions will fit together to make a 3-D object. It is important to keep straight which side of each piece is up/down, left/right, and inside/outside. The paper printout exists on the 6 outside faces of the box. Save the PCB file with a different name. Figure 2 shows the top side of Lab9Box.pcb",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1461878635/Design in PCB Artist.jpg",
  caption:"Figure 2. Design in PCB Artist"
)

stepCnt += 1


Api::Step.create!(
  order: 4,
  title:"PCB Artist",
  body:"Think about the mapping between PCB layers and the build process. I set PCB Artist to view only the layers used in the design: document, top copper, top silk, bottom silk, and board outline. I use the document layer to define parameters not translated to either cuts (vector) or etching (raster). Notice I added labels in the document layer to show the left/right, front/back, and top/bottom orientation. I use the top copper layer to define all cuts. In particular, I will cut holes in the sides of the box for items like LEDs and switches. The top copper layer also defines where in the box I wish drill holes. I use the top silk layer to define labels that will be etched on the pieces in raster mode. I use the bottom silk layer to define the other piece situated in an orthogonal dimension.  In PCB Artist the etching occurs on the outside layer, and the inside layer will not be etched.  I use the board outline layer to define the size of the raw material from which the 6 pieces will be cut. Execute Settings->Grids and set the Step Size to match your material thickness, and set the Snap Mode to Grid.  The following figure shows the settings for the 80 mil acrylic on the left, and the 125 mil wood on the right.",
  project_id: projectCnt
)

Api::Picture.create!(
imageable_id: stepCnt,
imageable_type:"Api::Step",
picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1461879748/image012_wk9hjq.jpg",
caption:"Figure 3A. Settings->Grids for 80 mil acrylic"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1461879752/image014_piyr79.jpg",
  caption:"Figure 3B. Settings->Grids for 125 mil wood"
)

stepCnt += 1


Api::Step.create!(
  order: 5,
  title:"Material Thickness",
  body:"If you need to change the material thickness, you should make this change first. You should move all edges of each piece so it snaps to the Grid, which is the material thickness. Obviously, make sure the inside of the box has room to fit the PCB and other components you wish to house.",
  project_id: projectCnt
)

stepCnt += 1


Api::Step.create!(
  order: 6,
  title:"Box Size Adjustments",
  body:"Next, adjust the size of the box as needed. It is really helpful to leave the snap to Grid at the same setting so all box dimensions are multiples of the material thickness. Top and bottom pieces should be the same size, left and right should be the same size. Front and back should be the same. Adjust the slots so they all fit together. One trick I use to make sure it fits is 1) save the PCB, 2) move/rotate pieces overtop each other to see all the slots will fit, 3) revert to the saved version. This is where the documentation helps to know which edges should line up.",
  project_id: projectCnt
)

stepCnt += 1


Api::Step.create!(
  order: 7,
  title:"Components and the Enclosure",
  body:"Next, open the PCB file that contains your actual PCB. In the box PCB, change the grid snap to value convenient for the actual PCB. Select components like the PCB mounting holes, LEDs, switches, display, and PCB board outline. Select all components that will physically interact with the box. Copy these components and paste them into the box PCB over the top (or bottom) side of the box. Move all these components together. Remember the box PCB shows the outside view of the box top, so you may have to flip the actual PCB depending on how you plan to mount the actual PCB into the box. The white in Figure 4 shows the PCB pasted over the top side of the box. The pasted actual PCB components have been flipped and rotated by 180 so the bottom copper layer of the actual PCB physically touches the inside of the top of the box.

  The next step is to draw top copper rectangles for switch and display, and to draw circles for the LED and mounting screws. Recall the top copper layer will be cut by the laser. Next, add top silk to label the six sides of the box as desired. Recall the top silk will be etched on the material. You can add holes and rectangles on the other sides for off board switches and connectors. It is important to remove or change layer to document all top copper that was pasted in from the actual PCB. Figure 5 shows the final edit. Remember, first we will etch the top silk (raster) and then cut with the top copper layer. It is helpful to observe the design with just top copper and top silk. Zoom way in to make sure there are not two or more copies of top copper objects.",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1461880038/image016_uhrgru.jpg",
  caption:"Figure 4. Components of the actual PCB pasted over the top side of the box"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1461880042/image018_nxaefr.jpg",
  caption:"Figure 5. The top side of the box with cutouts for display, switch and LED"
)

stepCnt += 1


Api::Step.create!(
  order: 8,
  title:"Measure twice and cut once",
  body:"You should not skip this step. Print out both your PCB and your box. Glue the pieces to cardboard and cut out the sides. Verify the labels are on the outside of the box and the slots, grooves and tabs will fit together.",
  project_id: projectCnt
)

stepCnt += 1


Api::Step.create!(
  order: 9,
  title:"Fitting the Components",
  body:"There are eight slots, four on the top and four on the bottom. Once you are sure you do not wish to change the size of the box, we will shrink the size of the eight slots so the pieces will fit snuggly. For the 80-mil acrylic, we will reduce the width of the slot from 80 to 70 mil. For the 93-mil acrylic, we will reduce the width of the slot from 93 to 84 mil.  For the 100-mil acrylic, we will reduce the width of the slot from 100 to 90 mil. For the 125-mil wood, we will reduce the width of the slot from 125 to 115 mil. We wish to move both sides of each slot by 5 mil, so we set the Grid to 5 mil, Figure 6. Figure 7A shows the slot before and Figure 7B shows the slot after reduction. This step accounts for the amount of material that will be removed by the laser during cutting",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1461880236/image020_eaimtn.jpg",
  caption:"Figure 6. Settings->Grids for ½ the desired shrinkage. For 93-mil acrylic I set the grid to 3mil and moved one side 6 mils and the other side I moved three mil."
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1461880259/image022_sturnw.jpg",
  caption:"Figure 7A. A slot is originally 1680 by 80 mil."
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1461880262/image024_y3cmrp.jpg",
  caption:"Figure 7B. We shrink the slot to 1680 by 70 mil. Notice both lines are moved towards each other."
)


stepCnt += 1


Api::Step.create!(
  order: 10,
  title:"Cutting Preparation",
  body:"To prepare for cutting make a pdf print of just the top copper, and a second pdf print of just the top silk. Make both prints 100 %, all black. The portrait/landscape orientation should be the same. The laser cutters have more horizontal dimension than vertical dimension. Print the pdf at 100% and cutout the copper pieces to verify orientations are correct.",
  project_id: projectCnt
)

stepCnt += 1

Api::Step.create!(
  order: 11,
  title:"Cutting",
  body:"1) Follow all safety and procedural steps as instructed by the Makerspace.
  2) First etch the labels by printing the top silk.
  3) Second, cut the pieces by printing the top copper layer.",
  project_id: projectCnt
)

stepCnt += 1
projectCnt += 1

#Project 2

Api::Project.create!(title:"Flow-DIY: How to flow and create projects", author_id:1)

Api::Picture.create!(
  imageable_id: projectCnt,
  imageable_type:"Api::Project",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462228335/create.jpg"
)

Api::Step.create!(
  order: 1,
  title:"Getting Started",
  body:"Make yourself comfortable with the layout and look for the your avatar's picture top right hand side of the page. Hover over it!",
  project_id: projectCnt
)

stepCnt += 1


Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462516960/Screen_Shot_2016-05-05_at_11.39.53_PM_ypheho.png"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462517139/Screen_Shot_2016-05-05_at_11.43.12_PM_ag9gcn.png"
)

Api::Step.create!(
  order: 2,
  title:"Creating a project",
  body:"Click on 'create' and you will be taken to a new page in which you can fill in the details for the idea that Flows in your head!",
  project_id: projectCnt
)

stepCnt += 1


Api::Step.create!(
  order: 3,
  title:"Steps and Pictures",
  body:"Write down your idea in steps for others to flow to. If you need more steps, just click 'Add Step' and voila. They say pictures are worth a 1000 words so make your page as rich as you want! You can attach as many pictures as you want to each step.",
  project_id: projectCnt
)

stepCnt += 1


Api::Step.create!(
  order: 4,
  title:"Submit!",
  body:"The world is ready to flow with you and you know it! Submit the project and let others experience it!",
  project_id: projectCnt
)

stepCnt += 1
projectCnt += 1

#Project 3

Api::Project.create!(title:"Watermelon Water: Nature's Own", author_id:1)

Api::Picture.create!(
  imageable_id: projectCnt,
  imageable_type:"Api::Project",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462229321/watermelon.jpg"
)

Api::Step.create!(
  order: 1,
  title:"watermelon",
  body:"Get a Watermelon. Not too big, not too small.",
  project_id: projectCnt
)

stepCnt += 1


Api::Step.create!(
  order: 2,
  title:"Hole",
  body:"Punch a hole in it!",
  project_id: projectCnt
)

stepCnt += 1


Api::Step.create!(
  order: 3,
  title:"Collect Water",
  body:"Insert device in hole made to extract water.",
  project_id: projectCnt
)

stepCnt += 1


Api::Step.create!(
  order: 4,
  title:"Drink It!",
  body:"Feel refreshed and content!",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462229561/images_xlnc0x.jpg"
)

stepCnt += 1
projectCnt += 1

# Project 4
Api::Project.create!(title:"Flow-DIY: How to flow and search for projects", author_id:1)

Api::Picture.create!(
  imageable_id: projectCnt,
  imageable_type:"Api::Project",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462228150/search.png"
)

Api::Step.create!(
  order: 1,
  title:"Getting Started",
  body:"Make yourself comfortable with the layout and look for the search bar at the top of the page.",
  project_id: projectCnt
)

stepCnt += 1


Api::Step.create!(
  order: 2,
  title:"Search Bar",
  body:"As you type into the search bar, the results will populate below it. Woah!",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462517590/Screen_Shot_2016-05-05_at_11.51.22_PM_ahqoxv.png"
)

stepCnt += 1


Api::Step.create!(
  order: 3,
  title:"Choose and Flow!",
  body:"Feel free to click on any of the search results. But beware, the page will change and take you to the project you chose! Go Flow!",
  project_id: projectCnt
)

stepCnt += 1


projectCnt += 1

#project #5
Api::Project.create!(title:"Short circuit tester", author_id: 3)

Api::Picture.create!(
  imageable_id: projectCnt,
  imageable_type:"Api::Project",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462519799/FGHCJZHIATHSY1D.MEDIUM_xiuwkj.jpg"
)

Api::Step.create!(
  order: 1,
  title:"Get these Materials",
  body:"Pcb board:
    An led (colour of your choice):
    Npn transistor (I used the 2222a):
    Cr2032 coin cell battery holder:
    1 mega ohm resistor:
    Wire port holder:
    Wire",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462517929/FMDKTM1IATHS4MA.LARGE_vxuhsy.jpg"
)

stepCnt += 1


Api::Step.create!(
  order: 2,
  title:"Circuit diagrams",
  body:"As explained before, The Npn transistor allows no current to pass through unless a small current is passed through the base of the transistor.

  As always the best way to start is by prototyping on a breadboard, it took me a while to get the position of the transistor right and to have the emitter and base and collector on the right polarity.

  The base should connected to positive, the emitter to negative and the collector to positive.",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462518060/FVCP71IIATHSEEL.MEDIUM_wtxhvw.jpg"
)

stepCnt += 1


Api::Step.create!(
  order: 3,
  title:"Assembling the Tester",
  body:"First put the coin cell holder on the pcb. Then place a wire from the positive side, to the center of the board.

  Put the transistor with the semi circle facing out wards next to the wire. solder them in place, then place an led, with the positive side facing the transistor solder the positive lead to the transistor and the negative side to the batter holder.

  Then solder one lead of the 1 mega ohm resistor to the positive side of the battery holder, place the wire holder ontop of the other lead of the resistor. Solder them in place.

  Bend the base lead of the transistor to the open pin on the wire holder, And solder in place.

  And that's it!.",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462518165/FHFUK73IATHSUVP.MEDIUM_uyrfwf.jpg"
)

stepCnt += 1


Api::Step.create!(
  order: 4,
  title:"Assembling the Tester",
  body:"Yours should be looking a bit like this when your done. I made two, the second one looks a bit neater then the first in my opinon, as I used less wire.

  I trimmed the edges a bit, but I still mean to sand them down. My soldering was quite shabby but it held up well enough.

  If you want you could surround the whole of the circuit in heat shrink tubing, but I didn't have any big enough.

  Hope you liked my project!",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462518238/FW8H10VIATHSWEM.MEDIUM_wlt1je.jpg"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462518254/F0Z9YACIATHSWI8.MEDIUM_gxorbh.jpg"
)

stepCnt += 1
projectCnt += 1

#project #6
Api::Project.create!(title:"Simple Blinking LED Circuit", author_id: 3)

Api::Picture.create!(
  imageable_id: projectCnt,
  imageable_type:"Api::Project",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462520160/F83HG60I6H7I3O3.MEDIUM_zu5vur.jpg"
)
Api::Picture.create!(
  imageable_id: projectCnt,
  imageable_type:"Api::Project",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462520162/FJDFBJNI6NIEWGS.MEDIUM_cdfphh.jpg"
)

Api::Step.create!(
  order: 1,
  title:"Add the transistors",
  body:"Add the two PNP transistors and the jumper wires from the power BUS to the emitter of each transistor. Because of the way I inserted the two transistors the emitter is on the left side of both transistors.",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462520382/FZUR9JKI6KN9FAA.MEDIUM_eleqvf.jpg"
)

stepCnt += 1


Api::Step.create!(
  order: 2,
  title:"Add the capacitors",
  body:"Connect the two capacitors to the circuit. Connect the positive lead of the first capacitor to the collector of transistor 2. Next connect the negative lead of the same capacitor to the base of transistor 1.

  Repeat the above process for the second capacitor. Connect the positive lead of the second capacitor to the collector of transistor 1. Connect the negative lead of the same capacitor to the base of transistor 2.",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462520439/FLP92M6I66D0TAB.MEDIUM_okvm4c.jpg"
)

stepCnt += 1


Api::Step.create!(
  order: 3,
  title:"Add the 100K resistors",
  body:"Next connect the 100k resistors to the transistors. One lead of the resistor connects to the Base of the transistor, the other lead connects to ground. Do this for both transistors.",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462520530/F6WQDLKI6C2MSNF.MEDIUM_rb1ifm.jpg"
)

stepCnt += 1


Api::Step.create!(
  order: 4,
  title:"Add the LEDs",
  body:"Finally add the two 470 Ohm resistors along with the two LEDs. I added a picture of a transistor to identify the Emitter, Base, and Collector.

  Connect one wire of the first resistor to the collector of transistor 1. The the other resistor wire then connects to the positive wire of the first LED. The negative wire of the LED is then connected to ground.

  Follow the same steps for the other resistor and LED. Connect one wire of the second resistor to the collector of transistor 2. The the other resistor wire then connects to the positive wire of the second LED. The negative wire of the LED is then connected to ground.",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462520566/F3KZ9ALI6H7I3EI.MEDIUM_amiywp.jpg"
)

stepCnt += 1
Api::Step.create!(
  order: 5,
  title:"Supply Power and Watch the LEDs blink",
  body:"The last step is to supply power and watch the LEDs blink. I use a 9 volt battery and it worked fine.

  For fun you can try other capacitor values to change the rate at which the LEDs blink.",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462520619/FU4XRHUI6NIBMWC.MEDIUM_dbtsfr.jpg"
)

stepCnt += 1
projectCnt += 1

#project #7
Api::Project.create!(title:"Simple Soft Circuit Button", author_id: 3)

Api::Picture.create!(
  imageable_id: projectCnt,
  imageable_type:"Api::Project",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462520675/F2RRSIAI735ZK01.MEDIUM_eivaey.jpg"
)
Api::Picture.create!(
  imageable_id: projectCnt,
  imageable_type:"Api::Project",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462520686/FFJJVK0I74N3RXR.LARGE_gxnoxy.jpg"
)
Api::Picture.create!(
  imageable_id: projectCnt,
  imageable_type:"Api::Project",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462520689/FEQC0O9I74N3RXU.SMALL_v880pd.jpg"
)

Api::Step.create!(
  order: 1,
  title:"Materials and Tools",
  body:"The materials you'll need:

  1/8 yard of non-conductive fabric
  1/16 yard of non-conductive batting
  36 inch of conductive thread
  2 conductive snaps
  A little bit of velcro tape
  A piece of paper to draw a pattern with
  An Arduino circuit to test with
  You can get most of these materials from any fabric or craft store. Batting comes in different weights depending on how fluffy you want it to be. You can also replace it with neoprene or felt, but that won't be as soft or as pliable.

  And the tools:

  Sewing Machine
  Hand Sewing Needle
  Tailor's Chalk
  Quilters' Pins
  Multimeter
  To test out the soft circuit button, I made a quick circuit for my Arduino. The button can be attached to any of the digital pins to act as a simple on/off switch. When attached to an analog pin, it can even act as a rudimentary pressure sensor. Plus, if you have some anti-static foam (the stuff your electronics are usually packed with) you can stuff it inside your button and turn it into a DIY Force Sensitive Resistor!",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462520382/FZUR9JKI6KN9FAA.MEDIUM_eleqvf.jpg"
)

stepCnt += 1


Api::Step.create!(
  order: 2,
  title:"Sewing on the Conductive Thread",
  body:"Cut out three squares of paper of the same size. Take one of them and cut out a smaller square in the middle. Place the one with the hole in the middle on the batting. This is going to be the pattern you follow. Whenever sewing things together, you always want to leave a little bit of room on the fabric for seam allowance. So pin down the paper pattern on your batting then cut out outside the paper's edges, leaving about 5/8 of an inch of room on each side. Cut out the middle also with a little bit of seam allowance.

  To prepare your fabric, pop a bobbin of conductive thread into your sewing machine. You can wind your own, or you can get these pre-wound from several sources like Adafruit, Sparkfun or Seeedstudio.

  Take two pieces of fabric larger than the square patterns that you cut out. Sew diagonally across the fabric pieces on the bias. You may want to practice on a scrap piece first. Check the tension of your machine. A good trick for sewing with conductive thread in the bobbin is slightly lowering the tension of the top thread so the bobbin thread floats a little bit. This sometimes jams the machine, however, so be aware.

  After sewing diagonally, sew a square pattern on one of the pieces and a cross-hair pattern on the other. You may want to draw it out with tailor's chalk beforehand to help guide you. Test the pieces with a multimeter to make sure the conductive thread connects to each other from end to end.

  When you're finished sewing with conductive thread, line up the fabric pieces so the conductive thread is facing up. Make the diagonals face the same way. If you flip one over and place it on top of the other piece, it should create an X with the conductive threads. This will prevent short circuiting and make things easier later when we have to attach it to some wires for the circuit.",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462520936/F83CDN0I735ZJVP.MEDIUM_sbaug4.jpg"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462520946/FGAQZWMI735ZJXT.SMALL_htkkz0.jpg"
)

stepCnt += 1


Api::Step.create!(
  order: 3,
  title:"Sewing Together the Button",
  body:"Now comes the fun part! ... It's also a complicated part.

  Take the piece of fabric with the conductive square pattern in the middle and place the batting on top of it, conductive side facing up. Line them up so the hole in the batting leaves the conductive pattern open. Pin the pieces together and sew them together with non-conductive thread.

  Stack the two pieces of fabric with the top thread (non-conductive threads) facing each other. Align the cross-hair so it overlaps the square pattern. Sew three sides of the button together. Then cut about 5/8 of an inch away from the seam, leaving even less room around the corners. When finished, flip the button inside out so it forms a pillow with the batting in the middle.

  You've now got a perfectly functioning conductive button. Don't believe me? Test it with a multimeter!",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462521047/FVOLSDQI735ZJYR.MEDIUM_bbz2g5.jpg"
)
Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462521051/F61JGZ1I735ZJZ6.MEDIUM_tfzhop.jpg"
)
Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462521053/F3YA10GI74N3YM0.MEDIUM_jarbxb.jpg"
)

stepCnt += 1


Api::Step.create!(
  order: 4,
  title:"Finishing The Button",
  body:"The final edge I like to be able to open and close at whim for debugging and for upgrading. So I attached some velcro tape on the seams. Finally, you're going to want to attach this button to your Arduino or other soft circuit. I didn't want to permanently attach the button to jumper wires. So I sewed on some conductive snaps to the conductive threads instead, one on for each side of fabric. That way the wires can be snapped off when needed.

  Always test your button with the multimeter first, in case it shorts. If all goes well, you can attach it to the Arduino Circuit I showed in the beginning of this instructable. Here's the code to light up your LED.

  But wait, there's more! I mentioned this button can also be an FSR. Well, if you have some anti-static foam (the kind they often package electronic components in) you can place it inside your button and turn it into a pressure sensor. Neat, huh?

  I hope you found this useful. Let me know what you think. Always open for suggestions!",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462521190/FPUQZESI735ZJZQ.MEDIUM_eo7vqc.jpg"
)
Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1462521176/FGV8T86I735ZJZS.MEDIUM_yone3g.gif"
)

stepCnt += 1

projectCnt += 1

#project #8
Api::Project.create!(title:"Mega Power Bank", author_id: 1)

Api::Picture.create!(
  imageable_id: projectCnt,
  imageable_type:"Api::Project",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471198538/proj_picture_oxsv59.jpg"
)

Api::Step.create!(
  order: 1,
  title:"Collect the Components",
  body:'The main components for the build are:

  An (empty!) ammunition box. The one I used was a .30 (7.62mm) calibre ammo box, measuring 25 x 8 x 18cm approximately. These are readily available from Army Surplus stores or a number of eBay sellers.
  A 12V sealed lead-acid (SLA) or valve-regulated lead acid (VRLA) battery. This needs to fit in your ammo box with plenty of height to spare. I used one measuring 15cm x 6.5cm x 9.5cm approx, which is a common sized replacement for UPS units. Typically these have a 7Ah or 9Ah capacity rating.
  Panel-mounting 12V socket, USB charger, and DC voltmeter set. These can be found on Amazon searching for "12V three hole panel". The three sockets are attached to a plastic mounting plate, but can be removed if required. In this design they are attached directly to the front panel and the mounting plate is not needed.
  A chunky toggle switch - this can be bought from many electronics suppliers, or a car or caravan accessory shop.
  You will also need:

  Wood for the front panel - this should be a decent (10-12mm) thickness as it it is a structural part of the whole design - and a number of other offcuts of thin sheet plywood or similar.
  A short length of aluminium angle.
  Wire, solder, and battery terminal connectors (these are often supplied with the panel socket set).
  Thin foam for battery mounting - the stuff I used was saved packaging from a laptop case.
  Nuts, bolts, wood screws, and double-sided adhesive tape.',
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471198538/step_1_1_o346sz.jpg"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471198538/step_1_2_pqfeqb.jpg"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471198538/step_1_3_fhrck4.jpg"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471198538/step_1_4_rmanqc.jpg"
)

stepCnt += 1


Api::Step.create!(
  order: 2,
  title:"Battery Mounting",
  body:"The SLA battery will sit on the base of the ammo box, held in place on three sides by the walls of the box. I cut some thin foam sheet to size and stuck it with double-sided tape to the walls. The fourth side of the battery is held in place with a piece of aluminium angle, cut to fit the width of the box. Drill a 5mm hole in the centre of the angle, then fix another piece of foam to its other face. Put the battery in position, hold the angle up against it, and mark through its hole onto the base of the box.

  Drilling the hole through the base of the box is fairly straightforward if you have a Dremel or similar small drill which will go in the box. If not, you may need to mark the position with a centre punch, then drill through from the other side. On my box the top lid was detachable, which made it easier to handle during assembly.

  If all goes well you can attach the aluminium angle to the base with an M4 bolt and Nylok nut. Make sure it's good and tight as it has to restrain the heavy battery.",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471198979/step_2_1_q6nm6z.jpg"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471198979/step_2_2_srvsoo.jpg"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471198979/step_2_3_wld5mx.jpg"
)

stepCnt += 1


Api::Step.create!(
  order: 3,
  title:"Front panel construction",
  body:"The front panel is a piece of softwood cut to fit inside the ammo box. The sides of the box are slightly tapered, and the corners are rounded, so I found it easiest to cut out a template from cardboard first and trim it for the best fit, then draw round it on to the wood. I rough-cut it using a power saw then shaped it, first with a surform and finally a power sander.

  The final width of the panel is a balance between keeping a comfortable spacing between the sockets, and leaving a good width for the storage compartment. On my box it came out as 175mm, as measured along the centre line.

  Next, cut holes for the three 12V sockets and the switch. I used a 30mm hole saw and a 12mm wood bit, respectively. The spacing between each of the hole centres came out at 42mm. I also needed to chisel out a rebate on the reverse of the panel to allow the switch to poke through sufficiently.

  When the wood is cut, it can be finished as you fancy. A medium wood dye and a couple of coats of glossy yacht varnish will give it a rather nice 'vintage car dashboard' look.",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471199087/step_3_1_oyjp6t.jpg"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471199087/step_3_2_rq3gz0.jpg"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471199087/step_3_3_odjsjx.jpg"
)

stepCnt += 1


Api::Step.create!(
  order: 4,
  title:"Front panel wiring",
  body:"When the woodwork is ready, the power sockets can be mounted on the panel, then wired up. I decided to leave the 12V accessory socket unswitched (connected directly to the battery), and the USB charger and voltmeter connected via the switch. They have a small (40-50mA) power drain when on, so will discharge the battery gradually if not switched off.

  When finished, the wiring looked as shown in the photo. I put heat-shrink sleeving on the finished joints to provide mechanical support and avoid exposing any 'live' conductors should any stray bits of metal find their way inside. You can briefly test the wiring by connecting up the battery, before further assembly.",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471199208/step_4_1_ujlk7k.jpg"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471199208/step_4_2_yc2qit.jpg"
)

stepCnt += 1

Api::Step.create!(
  order: 5,
  title:"Battery top mounting",
  body:"The heavy battery needs to be held securely in place to prevent vertical movement. This is done with a wooden 'channel' which sits on the top of the battery and is held down by the front panel. The channel is made with a small piece of 6mm ply, cut to the width of the battery, and two wooden offcuts (25 x 12 x 150mm approx) for the sides. These sides need to be tall enough to allow clearance for the front panel sockets and their wiring.

  The sides have a step cut in one end to leave a gap for the battery terminals. They are glued to the ply, and held in place with a couple of panel pins. (I made sure the heads of the pins were punched below the surface so they didn't scratch into the top of the battery).

  When this is done, the channel piece can be placed on top of the battery, and the front panel is then put in place above it.",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471199297/step_5_1_e6q6wx.jpg"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471199297/step_5_2_ekm7sn.jpg"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471199297/step_5_3_zh6s1x.jpg"
)

stepCnt += 1

Api::Step.create!(
  order: 6,
  title:"Final assembly steps",
  body:"The front panel is held in place with four screws, two on each side. You'll need to drill holes in the ammo box at the right position to hold the front panel in place - I found this easiest to do by measuring the distance from the top edge to the face of the panel (see photo), then adding on half the thickness of the wood. Position the mounting holes so that the screws avoid the the DC sockets when fully inserted.

  Finally, you need to cut a piece of thin ply to form the side of the storage compartment. It can be held on to the right-hand edge of the front panel with a couple of veneer pins. When this is done, the panel can be pushed into place and the mounting screws put in.",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471199296/step_6_1_f5fp97.jpg"
)
Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471199296/step_6_2_dals3o.jpg"
)

stepCnt += 1

Api::Step.create!(
  order: 7,
  title:"In use",
  body:"Lead-acid batteries are fairly forgiving (compared to other battery types) of electrical abuse, but their performance and lifetime will be improved if treated properly. I'm using a proper microprocessor-controlled charger to recharge the power bank - this has a multi-stage charging cycle, finishing with a 'float' stage which holds the battery fully-charged indefinitely without damaging it,

  The voltmeter can be used to judge the state of charge of the battery. During discharge the voltage will drop from 12.5V or so to under 11V - it's not recommended to discharge below about 10.5V as a deep discharge can permanently damage the cells.

  You can use a solar panel to recharge the battery, but note this will usually be a 'top-up' rather than a full charge - a 5W panel will charge at 0.3 amps or so in full sunshine, which will need 25 to 30 hours to deliver a full charge. Don't leave a solar panel permanently connected if the voltage is capable of exceeding 13.8V or so.",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471199296/step_7_1_vur5pz.jpg"
)

stepCnt += 1
projectCnt += 1

#project #9
Api::Project.create!(title:"LED Scarf", author_id: 2)

Api::Picture.create!(
  imageable_id: projectCnt,
  imageable_type:"Api::Project",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471200123/proj_vov3xp.jpg"
)

Api::Step.create!(
  order: 1,
  title:"Acquire Materials",
  body:"HARDWARE.

  - Microcontroller. I use a Teensy, because it's small and well-suited for LED strips, compared to Arduinos, Pi's, etc.
  https://www.pjrc.com/teensy/

  - LED strip. This Instructable uses the three-wired WS2811 series (2812 and 2812B work too). I highly recommend sourcing your LEDs from Ray Wu's eBay store, as it's consistently the best quality I've seen so far.
  http://www.aliexpress.com/store/product/5m-DC5V-WS...

  - Wire: Three colors of wire to connect all the bits.

  - USB cord: chop an old phone charging cable up, or buy one from the 99c store. All you need is power and ground, no data.

  - USB phone charger: these lipstick batteries spit out 5V, perfect for all your LED projects. Alternatively, you can get a disposable battery case, which is cheaper, but in the long run this rechargeable system will save you money, and is way more convenient: just hot-swap and go.
  http://www.ianker.com/product/79AN3K-PKA

  - Resistors: 100 ohm, one for each LED strip.

  - Heat shrink (or electrical tape, if you're desperate)

  - Mini-zipties for wire management

  - MicroUSB (for programming, NOT to cut!)

  - Wire strippers

  - Soldering kit

  - Blade (to cut trace, wires)

  - Multimeter (for debugging purposes)

  - Hot glue gun

  SOFTWARE.

  - Arduino environment

  - The OctoWS library (http://www.pjrc.com/teensy/td_libs_OctoWS2811.html). Alternatively, especially if you only want to drive a single strip, use the Adafruit library (https://github.com/adafruit/Adafruit_NeoPixel).

  - Teensy driver (http://www.pjrc.com/teensy/td_download.html).

  - There is some default code that comes with each of the libraries, but if you're running the Octo library, you can borrow some of mine.
  Basic Functions: https://github.com/agentcupcake/LEDs/blob/master/...
  Star Pattern: https://github.com/agentcupcake/LEDs/blob/30eaf5ae...

  FUZZYWARE.

  - Material. I use white fur, as it acts as a very nice, textured diffuser, but other white cloth will work as well.

  - Needle and thread (white preferable)

  - Sewing machine (for the long stitches)

  - Safety pins",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471200123/step_1_ziwxd0.jpg"
)


stepCnt += 1


Api::Step.create!(
  order: 2,
  title:"Prepare the Teensy",
  body:"Usually, the Teensy and its attachments are powered through the microUSB port. Since we want to power it from an external battery, however, we need to split the power away from the data I/O. Do this by cutting the trace found between the microUSB connector and the PWR pin. Take a thin blade and scrape the small gap between the two pads to break the thin wire underneath, then test for continuity.

  Next, we attach the wires. What you absolutely need is:

  - Power (red on PWR pin)
  - Ground (black on GND pin)
  - Data (green on pin 2), with a resistor
  - A wire between 15 and 16

  Each additional LED strip you attach will need its own data pin, but can attach to the same GND and PWR lines. The next LED strips should be attached like this:

  pin 2: LED Strip #1
  pin 14: LED strip #2
  pin 7: LED strip #3
  pin 8: LED strip #4
  pin 6: LED strip #5
  pin 20: LED strip #6
  pin 21: LED strip #7
  pin 5: LED strip #8

  Make sure there is no exposed wire; heat shrink the resistor, and any naked wires.",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471200123/step_2_1_cb5ut2.jpg"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471200123/step_2_2_jyktzw.jpg"
)


stepCnt += 1


Api::Step.create!(
  order: 3,
  title:"Prepare the USB Cable",
  body:"This is how the strip will be powered. It can be plugged into you computer, or the wall via adapter, but for wearables, plug it in to the rechargeable battery.

  There are build-your-own USB kits you can get, but an old phone cable works just fine. Cut off the not-USB end, leaving your desired length. Power and ground should be red and black or white and black, respectively, but it's not always that intuitive. You may need to use your multimeter to find which ones they are.",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471200123/step_3_ybtjah.jpg"
)


stepCnt += 1


Api::Step.create!(
  order: 4,
  title:"Attach the Strip",
  body:"I attached the Teensy to one end and the battery to the other, but if you want, you can attach both of them on the same end. Just make sure the Teensy is connected to the data IN, not OUT side.

  Once everything's soldered up, if your strip has a plastic waterproofing sheath on it, I highly recommend backfilling each end with hot glue to stabilize the joint: otherwise, the wires really, really like popping off.

  Slide the plastic down so it extends a little past the end of the strip (you may want to sacrifice a single LED to make this work; cut between the pads and you'll be fine). Squeeze hot glue in the top and bottom until it fills it solid. I had some caps for the ends as well, but if you don't have them, the glue itself should be just fine. Do both ends.

  It's a good idea to either make an enclosure for the Teensy or use zipties to give it some strain relief as well. Just make sure it's accessible later for repairs or reprogramming.",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471200123/step_4_wjdu2n.jpg"
)


stepCnt += 1

Api::Step.create!(
  order: 5,
  title:"Test and Program",
  body:"Now that the hardware is all done, it's time to test it. Plug the USB into a power source (your laptop is fine), AND your second USB cable from the Teensy's microUSB port to your computer.

  Make sure your environment is set up, your libraries are installed, and the Teensy driver is working. Under file--> examples --> OctoWS811 (or such) there should be some samples. Upload them to see if it works.

  If you want to make your own, I recommend experimenting with some 'sparse' patterns: the fewer LEDs you have on at a time, the longer your battery will last.

  Once your sketch is working, you can disconnect your data line, and connect the power to the battery, and the pattern should continue running.",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471200123/step_5_iehspf.jpg"
)


stepCnt += 1

Api::Step.create!(
  order: 6,
  title:"Sew the Scarf",
  body:"Measure the length of your LED strip, and decide how wide you want your scarf. Don't make it too wide, or it'll be floppy and ungainly; Don't make it too narrow, or it will be impossible to turn inside out and stick the LED strip in.

  Cut the shape out, and sew it inside out so the seams will be hidden inside. Sew around both ends, but leave a few inches on the long side open on each end: this is so you can access the Teensy and the battery, but they won't slide out while you wear the scarf.",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471200123/step_6_atggqr.jpg"
)


stepCnt += 1

Api::Step.create!(
  order: 7,
  title:"Insert the strip",
  body:"Turn the scarf inside-out (in this case, fuzzy side out), and slide the strip in. If the cloth is loose enough, you might be able to put the strip in battery-first and hold the scarf up so it slides all the way to the bottom. If it catches, grab a coat hanger or rod, slip that through the scarf first, hook it to the strip, and pull it through.

  Once the strip is in place, shake it a bit so it settles, and tuck the battery and teensy into each end. If it's done right, each one should be easy to pull out for recharging or reprogramming, but should nestle comfortably away while you wear it. If sliding occurs, use some safety pins or tack stitches to hold it in place.

  Congratulations! You did it! Now, bask in the 'glow' of your accomplishment!",
  project_id: projectCnt
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/e_sharpen:100,q_auto:best/v1471200123/step_7_pmbbnh.jpg"
)

stepCnt += 1

Api::Favorite.create!(
  author_id: 1,
  project_id: 2
)

favoritesCnt += 1

Api::Favorite.create!(
  author_id: 1,
  project_id: 8
)

favoritesCnt += 1
