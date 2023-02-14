const start_date = document.getElementById('start-date');
const end_date = document.getElementById('end-date');
const submit_btn = document.getElementById('submit-btn');

start_date.addEventListener('change', function (){
    console.log("date-change")
    var firstDay = new Date(start_date.value);
    var nextWeek = new Date(firstDay.getTime() + 2 * 24 * 60 * 60 * 1000);

    var dd = nextWeek.getDate();
    var mm = nextWeek.getMonth() + 1;
    var yyyy = nextWeek.getFullYear();

    var max_date = yyyy+"-"+mm+"-"+dd;

    console.log(start_date.value,max_date)
    end_date.min = start_date.value;
    end_date.max = max_date;

    end_date.disabled = false;
    submit_btn.disabled = false;
})

