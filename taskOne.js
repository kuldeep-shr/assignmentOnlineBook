//FOR THE FIRST TASK, BELOW THEIR MY ALGORITHM LOGIC:

S-1) AT FIRST WE CREATE 2D ARRAY AND SORTED IT,
		for ex:- Input: [[0,1,4,2,3], [6,5,8,9,7]]
						 sorted:[[0,1,2,3,4], [5,6,7,8,9]]		 
												S[i][]				O[j][]

		according to question,
		 					S[i][0] = start time of schdeule class,
							S[i][1] = end time of schdeule class

							O[j][0] = start time of optional class,
							O[j][1] = end time of optional class


S-2) AFTER THAT, WE CHECK THE OVERLAP CONDITION FOR BOTH OF ARRAYS,

			
			//first take A[1] and A[2]
			if(4 < 5 ){
				then NO overlap it
			}

			//first take A[2] and A[3]
			else if(7>=6){
				then, Overlap it
				either delete 6 and 7 from A[2] or  from A[3]
			}


	but according to question we have to take OVERLAPS in optimal classes not in Schdeule classes,
	but if found any OVERLAPS in schdeule classes then discard it.


S-3) NOW WE HAVE TO CHECK THEIR IS NO ANY CLASHES BETWEEN IN SCHDEULE CLASSES AND OPTIONAL CLASSES OF AKSHAY

		//here we have to compare the value firstArray(Schdeule Classes) with another secondArray(Optional Classes)


		let count=0
		for(let i=0 ; i<array.Length; i++){
			if(S[i][0] == O[j][0])
			return null
		}

		else{
			console.log('Akshay Optional Classes with number of Optional classes', O[][], count)

		}
}
