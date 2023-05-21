import java.util.*;

class Solution {
    public boolean isValid(String s) {
        ArrayList<String> st = new ArrayList<String>();
        String arr[] = s.split("");
        
        boolean b = false;
        for(int i = 0; i<arr.length; i++){
            System.out.println(arr[i].getClass().getSimpleName());
        
            if(arr[i].equals(")")){
                if(!st.isEmpty()){
                if((st.get(st.size()-1)).equals("(")){
                    st.remove(st.size()-1);
                    System.out.println("(  present"); 
                    
                }
                else{
                     b = false;
                    System.out.println("( not present"); 
                     return b;
                    
                }}
                else{
                    return false;
                }
            }
            else if(arr[i].equals("]")){
                if(!st.isEmpty()){
                if((st.get(st.size()-1)).equals("[")){
                    st.remove(st.size()-1);
                    System.out.println("[  present");
                }
                else{
                    b = false;
                    System.out.println("[ not present"); 
                    return b;
                }}
                else{
                    return false;
                }
                
            }
            else if(arr[i].equals("}")){
                if(!st.isEmpty()){
                if((st.get(st.size()-1)).equals("{")){
                    st.remove(st.size()-1);
                    System.out.println("{  present"); 
                }
                else{
                    b = false;
                    System.out.println("{ not present"); 
                    return b;
                }}
                else{
                    return false;
                }
                
            }
            else{
                st.add(arr[i]);
            }
        }
        if(st.isEmpty()){
            return true;
        }
        else{
            return false;
        }
        
    }
}


public class Ex8_4 {
    public static void main(String args[]) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter String: ");
		String par = sc.next();
		
		Solution sol = new Solution();
		System.out.println("String is valid: "+sol.isValid(par));
		
	}
}
