var table = [[],[],[],[],[],[],[],[]]; //array for table 8x8
var turn = 'black'; //black plays first
$(document).ready(function(){
	for( i = 0; i<8; i++) //setting up starting position
		for( j = 0; j<8; j++)
			table[i][j]='blank';
	table[3][3]='white'; 
	table[4][4]='white';
	table[3][4]='black';
	table[4][3]='black';
	draw(); //filling the color
	 $("td").click(function () {
        var ar = Array.from(event.target.id);
        if(check(turn, false,parseInt(ar[0]), parseInt(ar[1])))
            play(parseInt(ar[0]),parseInt(ar[1]));
        });
});

function draw()
{
	$("table").css("background-color", "#34B233");
	for(var i = 0; i < 8; i++)
        for(var j = 0; j < 8; j++)
        {
            	if(table[i][j] == 'white')
            	{
            		$("#"+i+j).css("background-color", "white").css("transition","all 0.8s ease");
            	} 
            	else if(table[i][j]=='black')
            	{
            		$("#"+i+j).css("background-color", "black").css("transition","all 0.8s ease");
            	}
            	
        }

}


function check( current, action,i, j)
{
	result = 0; 
    if(table[i][j] != 'blank') // if current cell occupied do nothing 
    	return 0; 

    if(i > 1)
		{
        	if(table[i - 1][j] != 'blank' && table[i - 1][j] != current) //if left cell is not empty or current color
         	{
          		k = i - 2; 
          		while(k > 0 && table[k][j] != 'blank' && table[k][j] != current) //going to the left
          		{
            		k--;
          		}
          		if(table[k][j] == current) while(k < i) //if current color all the cells back
          		{
            		k++;
            		if(action)
              			table[k][j] = current;
            		result++;
          		}
        	}
        	
        	if(j > 1)
	        {
				if(table[i - 1][j - 1] != 'blank' && table[i - 1][j - 1] != current) //if left top cell is not empty or not of the current players color
	        	{
	          		k = i - 2;
	          		l = j - 2;
	          		while(k > 0 && l > 0 && table[k][l] != 'blank' && table[k][l] != current) //moving to the left top diagonal untill empty or current color cell
	          		{
	            		k--;
	            		l--;
	          		}
	          		if(table[k][l] == current) // if we went to the current players cell 
	          			while(k < i && l < j) //color all cells back we went thru
	          			{
	            			k++;	
	            			l++;
	            			if(action)
	              				table[k][l] = current;
	            			result++;
	          			}
	        	}
			}
			
			if(j < 6)
			{
				if(table[i - 1][j + 1] != 'blank' && table[i - 1][j + 1] != current)
	        	{
	          		k = i - 2;
	          		l = j + 2;
	          		while(k > 0 && l < 7 && table[k][l] != 'blank' && table[k][l] != current)
	          		{
	            		k--;
	            		l++;
	          		}
	          		if(table[k][l] == current) while(k < i && l > j)
	          		{
	            		k++;
	            		l--;
	            		if(action) 
	              			table[k][l] = current;
	            		result++;
	          		}
	        	}
			}
      }

	if(i < 6)
		{
        	if(table[i + 1][j] != 'blank' && table[i + 1][j] != current)
        	{
          		k = i + 2;
          		while(k < 7 && table[k][j] != 'blank' && table[k][j] != current)
            		k++;
          		if(table[k][j] == current) while(k > i)
         		{
            		k--;
            		if(action) 
              			table[k][j] = current;
            		result++;
          		}
        	}
        	
        	if( j < 6)
        	{
				if(table[i + 1][j + 1] != 'blank' && table[i + 1][j + 1] != current)
	        	{
	          		k = i + 2;
	          		l = j + 2;
	          		while(k < 7 && l < 7 && table[k][l] != 'blank' && table[k][l] != current)
	          		{
						k++;
	            		l++;
	          		}
	          		if(table[k][l] == current) while(k > i && l > j)
	          		{
	            		k--;
	            		l--;
	            		if(action) 
	              			table[k][l] = current;
	            		result++;
	          		}
	        	}
			}
		}


	if(j > 1)
		{
        	if(table[i][j - 1] != 'blank' && table[i][j - 1] != current)
        	{
          		l = j - 2;
          		while(l > 0 && table[i][l] != 'blank' && table[i][l] != current)
            		l--;
          		if(table[i][l] == current) while(l < j)
          		{
            		l++;
            		if(action) 
              			table[i][l] = current;
            		result++;
          		}
        	}
        	if(i < 6)
        	{
				if(table[i + 1][j - 1] != 'blank' && table[i + 1][j - 1] != current)
	        	{
	          		k = i + 2;
	          		l = j - 2;
	          		while(k < 7 && l > 0 && table[k][l] != 'blank' && table[k][l] != current)
	          		{
	            		k++;
	            		l--;
	          		}
	          		if(table[k][l] == current) while(k > i && l < j)
	          		{
	            		k--;
	            		l++;
	            		if(action)
	              			table[k][l] = current;
	            		result++;
	          		}
	       	 	}
			}
		}
		
		
		if(j < 6)
			{
	        	if(table[i][j + 1] != 'blank' && table[i][j + 1] != current)
	        	{
	          		l = j + 2;
	          		while(l < 7 && table[i][l] != 'blank' && table[i][l] != current)
	            		l++;
	          		if(table[i][l] == current) while(l > j)
	          		{
	            		l--;
	            		if(action) 
	              			table[i][l] = current;
	            		result++;
	          		}
	        	}
	      }
	if(result && action) table[i][j] = current;

    return result;
}

    

function play(i, j)
{
	var white = 0; //white score
	var black = 0; //black score
    step = 0; //moves available
    if(check(turn, true, i, j))
    {
    	iteration(i, j); 
            		
        if(step == 0)
        {	
        	iteration(i, j); //we need to do it twice - one for black and one for white to see if there are still moves available
        	
          	if(step == 0) //if none moves availbale for both palyers -- game over
          	{
           		alert("Game Over!");
           		
           		for(var n =0; n<8; n++) //checking how many squares each player has to see who won
					for(var p =0; p<8; p++ )
					{
						if(table[n][p]=='white')
						white++;
						else
						black++;
					}
					
				if(white>black)
					alert(white+"white won"+black);
				else if(black>white)
					alert(white+"black won"+black);
				else
					alert("tie");
          	}
          	else //if moves available for one of the players --- another one passes
          	{
            	if(turn == 'white') 
            		alert('Black passes!');
            	else
            		alert('White passes!');
          	}
        }
	}   
}

function iteration(i, j)
{
	if(turn == 'white') 
    		turn = 'black';
        else 
        	turn = 'white';
        	
        draw();
        
        for(m = 0; m < 8; m++)
        	for(n = 0; n < 8; n++)
            	if(check(turn, false,m, n) > 0) 
            		step++; //counting available moves
}


