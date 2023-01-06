var API="https://crudcrud.com/api/49f2e49b894b40d38ffd780b62220efe/appointment";

var submit = document.getElementById('submit');
submit.addEventListener('click', addData);

function addData(e) {
      e.preventDefault();
       var name = document.getElementById("name").value;
       var email = document.getElementById("email").value;
       var phone = document.getElementById("phone").value;

    let obj =
    {
    name : name,
    email : email,
    phone : phone
    };

    document.getElementById("name").value='';
    document.getElementById("email").value='';
    document.getElementById("phone").value='';

    axios.post(API,obj)
    .then(res =>{
      showUserDetails();
    })
    .catch(err=>console.log(err));
}

function showUserDetails(){
   axios.get(API)
   .then(users =>{
      let target=document.querySelector('.usersList');
      target.innerHTML='';
      for(let i=0;i<users.data.length;i++){
        const li = document.createElement('li');
        const listText = document.createTextNode(`${users.data[i].name}`);
        li.appendChild(listText);

        const delBtn = document.createElement('button');
        const delBtnText = document.createTextNode('Delete');
        delBtn.appendChild(delBtnText);
        delBtn.onclick = function (e) {
            e.preventDefault();
            deleteInfo(users.data[i]._id);
        }

        const editBtn = document.createElement('button');
        const editText = document.createTextNode('Edit');
        editBtn.appendChild(editText);
        editBtn.onclick = function (e) {
            e.preventDefault();
            editInfo(users.data[i]._id,users.data[i].name,users.data[i].email,users.data[i].phone);
        }

        target.appendChild(li);
        target.appendChild(delBtn);
        target.appendChild(editBtn);
      }
   })
}

function deleteInfo(userId){
   
   console.log(userId);
   axios.delete(`https://crudcrud.com/api/49f2e49b894b40d38ffd780b62220efe/appointment/${userId}`)
   .then(res=>{
      showUserDetails();
   })
}

function editInfo(userId,Name,Email,Phone){
      deleteInfo(userId);
   
      document.getElementById("name").value=Name;
      document.getElementById("email").value=Email;
      document.getElementById("phone").value=Phone;
   
}

window.onload=showUserDetails();




  
  







  
  







