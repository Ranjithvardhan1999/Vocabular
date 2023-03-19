export function count_func(){
    var count_of_array = localStorage.getItem("vocab_in_ls");
    count_of_array = count_of_array.split(",");
    console.log("count_of_arra is ", count_of_array.length);
    count_of_array = count_of_array.length;

    console.log("count_of_array is ", count_of_array);
    var random_num = Math.floor(Math.random() * (count_of_array+1));
    console.log(random_num ," is random num")

    return random_num;
}
export function final_func(){
    final_vocab_output = localStorage.getItem('vocab_in_ls');
    final_vocab_output = final_vocab_output.split(",");

    final_desc_output = localStorage.getItem('desc_in_ls');
    final_desc_output = final_desc_output.split(",");

    let final_vocab = document.getElementById("vocab");
    final_vocab.innerHTML = final_vocab_output[random_num];
    
    let final_desc = document.getElementById("desc");
    final_desc.innerHTML = final_desc_output[random_num];

    console.log(final_vocab_output[random_num]);
    console.log(final_desc_output[random_num]);
    }


export function swap_func(){
    let get_shuffle = document.getElementById("shuffle-button-id");
    get_shuffle.style.display = "none";
}

export function refresh_func(){
    const vocab_desc_display = document.getElementById("vocab_desc_div_id");

    vocab_desc_display.style.display = "none";

}

export function nodisplay_func(){
    const no_display_vocab = document.getElementById("vocab_input");
    const no_display_desc = document.getElementById("desc_input");
    const submit_button_display = document.getElementById("submit_button");


    no_display_vocab.style.display = "none";
    no_display_desc.style.display = "none";
    submit_button_display.style.display = "none";

    const vocab_desc_display = document.getElementById("vocab_desc_div_id");

    vocab_desc_display.style.display = "flex"
    vocab_desc_display.style.justifyContent = "center";
    vocab_desc_display.style.columnGap = "40px";
    vocab_desc_display.style.alignItems = "center"
    

    const vocab_display = document.getElementById("vocab");
    vocab_display.style.border = "solid";
    vocab_display.style.padding = "5px";
    vocab_display.style.fontWeight = "bold";
    vocab_display.style.length = "50px";
    vocab_display.style.height = "fit-content";
    vocab_display.style.backgroundColor = "black";
    vocab_display.style.color = "white";
    vocab_display.style.border = "none";

    

    const desc_display = document.getElementById("desc");
    desc_display.style.border = "solid";
    desc_display.style.padding = "5px";
    desc_display.style.fontWeight = "bold";
    desc_display.style.length = "50px";
    desc_display.style.backgroundColor = "black";
    desc_display.style.color = "white";
    desc_display.style.border = "none";



    const next_button = document.getElementById("next_button");
    next_button.style.height = "fit-content";
    next_button.style.justifyContent = "end"

}

export function var_func(){
    vocab_push = document.getElementById('vocab_input').value;
    desc_push = document.getElementById('desc_input').value;

       // If the Input blocks are empty

    if ((vocab_push === ("")) || (desc_push ===(""))){
       alert("Please fill in both Vocab and it's description");
   }

       //First time the input blocks are not empty

   else if ((localStorage.getItem("vocab_in_ls") === null) && (vocab_push !== ("")) && (desc_push !== (""))) {
       let vocab_input_array = [];
       let desc_input_array = [];

       console.log("vocab_input is created and the value is " + vocab_input_array + "and the typeof of vocab_input_array is" + typeof(vocab_input_array));
       console.log("desc_input_array is creaete and the value is " + desc_input_array+ "and the typeof of desc_input_array is" + typeof(desc_input_array));

       vocab_input_array = vocab_input_array.concat(vocab_push);
       desc_input_array = desc_input_array.concat(desc_push);

       console.log("vocab_input_array is pushed with vocab_push and the value is" + vocab_input_array + "and the typeof of vocab_input_array is" + typeof(vocab_input_array));
       console.log("desc_input_array is pushed with desc_push and the value is" + desc_input_array+ "and the typeof of desc_input_array is" + typeof(desc_input_array));

       localStorage.setItem('vocab_in_ls',vocab_input_array);
       localStorage.setItem('desc_in_ls',desc_input_array);

       console.log("vocab_input_array is set with a name Vocab_in_ls");
       console.log("desc_input_array is set with a name desc_in_ls");
   }
       //other times

   else if ((localStorage.getItem("vocab_in_ls") !== null) && (vocab_push !== ("")) && (desc_push !== (""))){

   get_vocab_ls = localStorage.getItem('vocab_in_ls');
   get_desc_ls = localStorage.getItem('desc_in_ls');

   console.log("get_vocab_ls value is fetched from local storage and the value is", get_vocab_ls + "and the typeof(get_vocab_ls) " + typeof(get_vocab_ls));
   console.log("get_desc_ls value is fetched from local storage and the value is", get_desc_ls + "and the typeof(get_desc_ls) " + typeof(get_desc_ls));

   str2arr_vocab = get_vocab_ls.split(",");
   str2arr_desc = get_desc_ls.split(",");

   console.log("get_vocab_ls value was a string now converted into an array with comma(,) as a separator and the value is ", str2arr_vocab + "and the typeof(get_vocab_ls) " + typeof(str2arr_vocab));
   console.log("get_desc_ls value was a string now converted into an array with comma(,) as a separator and the value is ", str2arr_desc + "and the typeof(get_vocab_ls) " + typeof(str2arr_desc));

   // console.log("get_vocab_ls is splitted and the value is " + get_vocab_ls + "and the typeof(get_vocab_ls) is" + typeof(get_vocab_ls));
   // console.log("get_desc_ls is splitted and the value is " + get_desc_ls + "and the typeof(get_desc_ls) is" + typeof(get_desc_ls));

   let vocab_input_array = [];
   let desc_input_array = [];

   vocab_input_array = vocab_input_array.concat(str2arr_vocab,vocab_push);
   desc_input_array = desc_input_array.concat(str2arr_desc,desc_push);

   console.log("vocab_input_array is pushed with vocab_push and previous get_vocab_ls[0] value is " + vocab_input_array[vocab_input_array.length -1] + "typeof of vocab_input_array is" + typeof(vocab_input_array));
   console.log("desc_input_array is pushed with desc_push  and previous get_desc_ls[0] value is" + desc_input_array[desc_input_array.length-1] + "typeof of desc_input_array is" + typeof(desc_input_array));


   

   localStorage.setItem('vocab_in_ls',vocab_input_array);
   localStorage.setItem('desc_in_ls',desc_input_array);

   console.log("vocab_input_array is set with a name Vocab_in_ls");
   console.log("desc_input_array is set with a name desc_in_ls");

   
   }
   //after a long long trouble there are twoarrays with vocab and desc values. with keys vocab_in_ls and desc_in_ls with file names vocab_input_array and desc_input_array
   // all we have left with is to just show some of the random ones by slicing this two arrays.


   //block display function
   
}