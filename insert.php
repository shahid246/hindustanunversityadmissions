<?php
	 $connect = mysqli_connect("localhost","root","","");
	$formdata = json_decode(file_get_contents("php://input"));	
	
	if (count($formdata)>0)
	 {
		
		$name = mysqli_real_escape_string($connect, $formdata->name); 	
		$mobile = mysqli_real_escape_string($connect, $formdata->mobile); 	
		$email = mysqli_real_escape_string($connect, $formdata->email); 	
		$course = mysqli_real_escape_string($connect,$formdata->course); 	
		$stream = mysqli_real_escape_string($connect,$formdata->stream); 	
		$branch = mysqli_real_escape_string($connect,$formdata->branch); 	

		$query = "INSERT INTO hindusthan_univ(name,mobile,email,course,stream,branch) VALUES ('$name','$mobile','$email','$course' ,'$stream', '$branch')";

			if(mysqli_query($connect, $query))
			{
				echo "data inserted";
			}
			else
			{
				echo "error";
			}
	}
	
?>
