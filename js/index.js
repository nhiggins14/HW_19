
$('.L1').on('click', function () {
    $('p.boxText').css('display','flex'),
    $('.C1').css('display','none'),
    $('.R1').css('display','none'),
    $('#rowCon1').addClass('rowContainerActive'),
    $('.L1').addClass('geoBlockActive'),
    $('.L1Title').addClass('titleActive')
})
// .on('click', function () {
//     $('p.boxText').css('display','none'),
//     $('.C1').css('display','block'),
//     $('.R1').css('display','block'),
//     $('#rowCon1').removeClass('rowContainerActive'),
//     $('.L1').removeClass('geoBlockActive'),
//     $('.L1Title').removeClass('titleActive')
// })
;

$('.C1').on('click', function () {
    $('p.boxText').css('display','flex'),
    $('.L1').css('display','none'),
    $('.R1').css('display','none'),
    $('#rowCon1').addClass('rowContainerActive'),
    $('.C1').addClass('geoBlockActive'),
    $('.C1Title').addClass('titleActive')
})
$('.R1').on('click', function () {
    $('p.boxText').css('display','flex'),
    $('.L1').css('display','none'),
    $('.C1').css('display','none'),
    $('#rowCon1').addClass('rowContainerActive'),
    $('.R1').addClass('geoBlockActive'),
    $('.R1Title').addClass('titleActive')
})
// $('.geoBlockActive').on('click', function () {
//     $('p.boxText').css('display','none'),
//     $('.geoBlock').css('display','block'),
//     $('#rowCon1').removeClass('rowContainerActive'),
//     $('.geoBlock').removeClass('geoBlockActive'),
//     $('.row1').removeClass('titleActive')
// }
// )

$('.L3').on('click', function () {
    // $('p.boxText').css('display','flex'),
    $('.C3').css('display','none'),
    $('.R3').css('display','none'),
    $('.L3').css('background-image','none'),
    $('#rowCon3').addClass('rowContainerActive'),
    $('.L3').addClass('geoAciveCaseStudy'),
    $('.L3Title').addClass('titleActive')
})
;

$('.C3').on('click', function () {
    // $('p.boxText').css('display','flex'),
    $('.L3').css('display','none'),
    $('.R3').css('display','none'),
    $('.C3').css('background-image','none'),
    $('#rowCon3').addClass('rowContainerActive'),
    $('.C3').addClass('geoAciveCaseStudy'),
    $('.C3Title').addClass('titleActive')
})
$('.R3').on('click', function () {
    // $('p.boxText').css('display','flex'),
    $('.L3').css('display','none'),
    $('.C3').css('display','none'),
    $('.R3').css('background-image','none'),
    $('#rowCon3').addClass('rowContainerActive'),
    $('.R3').addClass('geoAciveCaseStudy'),
    $('.R3Title').addClass('titleActive')
  
  


})



console.log('hello');


//  <script>
//    $('geoAciveCaseStudy').hover,function () {
//             $('.R3').css('background-color', 'none')
//          }
          
// </script>
