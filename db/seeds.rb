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
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462521499/benjaminfranklin_r2qrma.jpg"
)

userCnt += 1

Api::User.create!(email:"rod@flow-diy.com", password:"1");
Api::Picture.create!(
  imageable_id: userCnt,
  imageable_type: "Api::User",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462551422/profile.jpg"
)

userCnt += 1

# Project 1
Api::Project.create!(title:"How to design an enclosure using the Laser cutter in the Engineering College maker space", author_id:2)

Api::Picture.create!(
  imageable_id: projectCnt,
  imageable_type:"Api::Project",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1461881506/ValvanoHat_lsjuwe.jpg"
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
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1461880724/image002_odhuyf.jpg",
  caption:"Figure 1A. Lab3Box"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1461880730/image004_gnmnn5.jpg",
  caption:"Figure 1B. Lab9Box"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1461880733/image006_lytd3o.jpg",
  caption:"Figure 1C. WoodBox"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1461880747/image008_bxd1bi.jpg",
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
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1461878635/Design in PCB Artist.jpg",
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
picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1461879748/image012_wk9hjq.jpg",
caption:"Figure 3A. Settings->Grids for 80 mil acrylic"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1461879752/image014_piyr79.jpg",
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
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1461880038/image016_uhrgru.jpg",
  caption:"Figure 4. Components of the actual PCB pasted over the top side of the box"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1461880042/image018_nxaefr.jpg",
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
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1461880236/image020_eaimtn.jpg",
  caption:"Figure 6. Settings->Grids for ½ the desired shrinkage. For 93-mil acrylic I set the grid to 3mil and moved one side 6 mils and the other side I moved three mil."
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1461880259/image022_sturnw.jpg",
  caption:"Figure 7A. A slot is originally 1680 by 80 mil."
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1461880262/image024_y3cmrp.jpg",
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
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462228335/create.jpg"
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
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462516960/Screen_Shot_2016-05-05_at_11.39.53_PM_ypheho.png"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462517139/Screen_Shot_2016-05-05_at_11.43.12_PM_ag9gcn.png"
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
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462229321/watermelon.jpg"
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
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462229561/images_xlnc0x.jpg"
)

stepCnt += 1
projectCnt += 1

# Project 4
Api::Project.create!(title:"Flow-DIY: How to flow and search for projects", author_id:1)

Api::Picture.create!(
  imageable_id: projectCnt,
  imageable_type:"Api::Project",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462228150/search.png"
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
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462517590/Screen_Shot_2016-05-05_at_11.51.22_PM_ahqoxv.png"
)

stepCnt += 1


Api::Step.create!(
  order: 3,
  title:"Choose and Flow!",
  body:"Feel free to click on any of the search results. But beware, the page will change and take you to the project you chose! Go Flow!",
  project_id: projectCnt
)

stepCnt += 1


#user 3
Api::User.create!(email:"mc2@flow-diy.com", password:"flow-diy");
Api::Picture.create!(
  imageable_id: userCnt,
  imageable_type: "Api::User",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462516614/Albert_Einstein_Head_koi8c4.jpg"
)

userCnt += 1

projectCnt += 1

#project #5
Api::Project.create!(title:"Short circuit tester", author_id: 3)

Api::Picture.create!(
  imageable_id: projectCnt,
  imageable_type:"Api::Project",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462519799/FGHCJZHIATHSY1D.MEDIUM_xiuwkj.jpg"
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
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462517929/FMDKTM1IATHS4MA.LARGE_vxuhsy.jpg"
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
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462518060/FVCP71IIATHSEEL.MEDIUM_wtxhvw.jpg"
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
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462518165/FHFUK73IATHSUVP.MEDIUM_uyrfwf.jpg"
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
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462518238/FW8H10VIATHSWEM.MEDIUM_wlt1je.jpg"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462518254/F0Z9YACIATHSWI8.MEDIUM_gxorbh.jpg"
)

stepCnt += 1
projectCnt += 1

#project #6
Api::Project.create!(title:"Simple Blinking LED Circuit", author_id: 3)

Api::Picture.create!(
  imageable_id: projectCnt,
  imageable_type:"Api::Project",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462520160/F83HG60I6H7I3O3.MEDIUM_zu5vur.jpg"
)
Api::Picture.create!(
  imageable_id: projectCnt,
  imageable_type:"Api::Project",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462520162/FJDFBJNI6NIEWGS.MEDIUM_cdfphh.jpg"
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
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462520382/FZUR9JKI6KN9FAA.MEDIUM_eleqvf.jpg"
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
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462520439/FLP92M6I66D0TAB.MEDIUM_okvm4c.jpg"
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
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462520530/F6WQDLKI6C2MSNF.MEDIUM_rb1ifm.jpg"
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
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462520566/F3KZ9ALI6H7I3EI.MEDIUM_amiywp.jpg"
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
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462520619/FU4XRHUI6NIBMWC.MEDIUM_dbtsfr.jpg"
)

stepCnt += 1
projectCnt += 1

#project #7
Api::Project.create!(title:"Simple Soft Circuit Button", author_id: 3)

Api::Picture.create!(
  imageable_id: projectCnt,
  imageable_type:"Api::Project",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462520675/F2RRSIAI735ZK01.MEDIUM_eivaey.jpg"
)
Api::Picture.create!(
  imageable_id: projectCnt,
  imageable_type:"Api::Project",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462520686/FFJJVK0I74N3RXR.LARGE_gxnoxy.jpg"
)
Api::Picture.create!(
  imageable_id: projectCnt,
  imageable_type:"Api::Project",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462520689/FEQC0O9I74N3RXU.SMALL_v880pd.jpg"
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
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462520382/FZUR9JKI6KN9FAA.MEDIUM_eleqvf.jpg"
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
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462520936/F83CDN0I735ZJVP.MEDIUM_sbaug4.jpg"
)

Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462520946/FGAQZWMI735ZJXT.SMALL_htkkz0.jpg"
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
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462521047/FVOLSDQI735ZJYR.MEDIUM_bbz2g5.jpg"
)
Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462521051/F61JGZ1I735ZJZ6.MEDIUM_tfzhop.jpg"
)
Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462521053/F3YA10GI74N3YM0.MEDIUM_jarbxb.jpg"
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
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462521190/FPUQZESI735ZJZQ.MEDIUM_eo7vqc.jpg"
)
Api::Picture.create!(
  imageable_id: stepCnt,
  imageable_type:"Api::Step",
  picture_url:"http://res.cloudinary.com/flow-diy/image/upload/v1462521176/FGV8T86I735ZJZS.MEDIUM_yone3g.gif"
)

stepCnt += 1
