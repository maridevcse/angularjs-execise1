let app=angular.module('app',[]);

app.controller('myController',function($scope){

    $scope.name="",
    $scope.age=0,
    $scope.avatarUrl="john"
    $scope.addArr=[]
   
    $scope.$watch('name',function(){console.log("Name Modified")})
    $scope.data={
        firstNumber:0,
        secondNumber:0,
        add:function(){

            return {
            
                firstNumber:this.firstNumber,
                secondNumber:this.secondNumber,
                addedValue:this.firstNumber+this.secondNumber
            
            }
        }
    

    }
  
    $scope.addMe=()=>{

        if($scope.data.firstNumber!=="" && $scope.data.secondNumber!==""){
      
          const temp=$scope.data.add();
          
           $scope.addArr.push(temp);
           $scope.data.firstNumber="";
           $scope.data.secondNumber="";

        }
        else{
            alert("Please Enter the Numbers to calculate")
        }
       
    }
})








app.controller('profileController',function($scope){

    $scope.person={
        name:'',
        lname:'',
        age:'',
        description:'',
        imageUrl:''

    };

    $scope.error=false;

  $scope.personsArr=[{
      name:'John',
      description:"Developer",
      age:27,
      imageUrl:"https://hairstylecamp.com/wp-content/uploads/professional-hairstyles-for-men-11.jpg"
  }]


$scope.$watch('person.name',function(){

    console.log($scope.person.name)
   
    if($scope.person.name==='' || $scope.person.name===undefined){

        $scope.error={name:'***name should not be blank***'}
    }
    else{

        $scope.error=false;

    }
    
})

  
  
  $scope.addPerson=function(){
 
    
    $scope.person.imageUrl="https://hairstylecamp.com/wp-content/uploads/professional-hairstyles-for-men-11.jpg";
    $scope.personsArr.push($scope.person)
    
    $scope.person={
        name:'',
        lname:'',
        age:'',
        description:'',
        imageUrl:''

    };

  }
  
    

})




