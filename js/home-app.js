'use strict';
function togglesidebar(){
    document.getElementById('side-bar').classList.toggle('active');
};
let mychart= document.getElementById('mychart').getContext('2d');
let barchart= new Chart(mychart,{
  type:'bar',
  data:{
    labels:['Surgeons / Doctors','Judges','Lawyers','Bank Managers','Chief Executive Officers','Chief Financial Officers','Orthodontists','College Professors','Pilots','Marketing Directors'],
    datasets:[{
      label:'JOD',
      data:[7000,4500,4000,3700,3500,2600,2200,2000,1750,1500],
      backgroundColor:[
'rgba(183, 20, 0, 0.5)',
'rgba(183, 142, 0, 0.5)',
'rgba(183, 235, 0, 0.5)',
'rgba(183, 235, 183, 0.5)',
'rgba(183, 235, 3, 1)',
'rgba(255, 235, 3, 1)',
'rgba(255, 88, 3, 1)',
'rgba(255, 88, 102, 1)',
'rgba(255, 88, 203, 1)',
'rgba(255, 25, 34, 0.2)',
      ],
    }]
  },
options:{
    title:{
        display:true,
        text: 'Top AVG Paid Jobs in Jordan',
        fontSize:25
    },
    legend:{
position:'right',

    }
}
}
  );