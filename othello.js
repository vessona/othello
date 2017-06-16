var table = new Array();
for(i = 0; i < 8; i++) 
	table[i] = new Array();
var turn = 'black';
var white = 0;
var black = 0;
$(document).ready(function(){
	for( i = 0; i<8; i++) //setting up starting position
		for( j = 0; j<8; j++)
			table[i][j]='blank';
	table[3][3]='white'; 
	table[4][4]='white';
	table[3][4]='black';
	table[4][3]='black';
	$("td").css("background-color", "green");
	draw(); 
});

function draw()
{
	for(i = 0; i < 8; i++)
        for(j = 0; j < 8; j++)
        {
			clickStr = '';
          	if(table[i][j] == 'blank')
          	{
            	if(swap(turn, false,i, j))
             	clickStr = 'onclick="play('+i+','+j+')"';
          	}
          	else
          	{
            	if(table[i][j] == 'white')
            	{
            		white++;
            		$("#"+i+j).css("background-color", "white");
            	} 
            	else 
            	{
            		$("#"+i+j).css("background-color", "black");
            		black++;}
          		}
  			$("#"+i+j).html('<img width=30 height=30 '+clickStr+'>');
        }
}


function swap( current, action,i, j)
{
	result = 0;
    if(table[i][j] != 'blank') 
    	return 0;

    if(i > 1 && j > 1)
    	{
        	if(table[i - 1][j - 1] != 'blank' && table[i - 1][j - 1] != current)
        	{
          		k = i - 2;
          		l = j - 2;
          		while(k > 0 && l > 0 && table[k][l] != 'blank' && table[k][l] != current)
          		{
            		k--;
            		l--;
          		}
          		if(table[k][l] == current) while(k < i && l < j)
          		{
            		k++;
            		l++;
            		if(action)
              			table[k][l] = current;
            		result++;
          		}
        	}
		}

    if(i > 1)
		{
        	if(table[i - 1][j] != 'blank' && table[i - 1][j] != current)
        	{
          		k = i - 2;
          		while(k > 0 && table[k][j] != 'blank' && table[k][j] != current)
          		{
            		k--;
          		}
          		if(table[k][j] == current) while(k < i)
          		{
            		k++;
            		if(action)
              			table[k][j] = current;
            		result++;
          		}
        	}
      }

    if(i < 6 && j > 1)
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

	if(i > 1 && j < 6)
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
		}

	if(i < 6 && j < 6)
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
		}
	if(result && action) table[i][j] = current;

    return result;
}

    

function play(i, j)
{
    step = 0;
    if(swap(turn, true, i, j))
    {
    	if(turn == 'white') 
    		turn = 'black';
        else 
        	turn = 'white';
        	
        draw();
        
        for(m = 0; m < 8; m++)
        {
        	for(n = 0; n < 8; n++)
          	{
            	if(swap(turn, false,m, n) > 0) step++;
          	}
        }
        if(step == 0)
        {
        	if(turn == 'white') 
        		turn = 'black';
          	else 
          		turn = 'white';
          		
          	draw();
          	
          	for(m = 0; m < 8; m++)
            	for(n = 0; n < 8; n++)
              		if(swap(turn, false,m, n)) 
              			step++;
          	if(step == 0)
          	{
           		alert("Game Over!");
          	}
          	else
          	{
            	if(turn == 'white') 
            		alert('Black passes!');
            	else
            		alert('White passes!');
          	}
        }
	}   
}
