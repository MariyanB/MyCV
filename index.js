class HelloWorld {
    public static void main(String[] args) {
    try{
    int arr[] = {12,56,43,78};
    System.out.println(arr[4]);
    }catch(Exception e){
    System.out.println("Exception 1");
    }catch(ArrayIndexOutOfBoundsException e){
    System.out.println("Exception 2");
    }
    }
   }