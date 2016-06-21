<header>

# Students Grades Web Service API

</header>

<main>

<section id="general">

This is a web application of student grades, the details are returned as JSON objects.  
Each student has id, name, grade, couese and year. Here is an example:  

{  
  "id" : "1",  
  "name" : "Elsa",  
  "grade" : "78",  
  "course" : "ws",  
  "year" : "2015"  
}

</section>

<section>

## Excellence Students

To get the details of the JSON you need to click on the link below:  

[**All Students**](https://ws-noa-ex2.herokuapp.com/showall)

</section>

<section>

## Excellence Students

To get the details of a certain student by id you need to click on the link below (this link is of student with id 1):  

[**Student Grade by id**](https://ws-noa-ex2.herokuapp.com/getbyid/1)
there is 1, 2 and 3 id - if you enter an id that noe existes nothing will be returned
</section>

<section>

## Excellence Students

To get the details of the outstanding students that has grades of 90 and above in a certain year you need to click on the link below (this link is for year 2016):  

[**Excellence Students by year**](https://ws-noa-ex2.herokuapp.com/getbest/2016)
there is 2016, 2015 and 2014 id - if you enter a year that noe existes nothing will be returned, in 2014 there is no exellance studnt
</section>

</main>
