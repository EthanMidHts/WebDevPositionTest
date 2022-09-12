function disableImg(imgName:string){
    document.getElementById(imgName)!.style.visibility = "hidden";
    console.log(imgName);
}

function changeColor(){
    let input = (<HTMLInputElement> document.getElementById('colorInput')!)
    let color: string = input.value;
    let square = document.getElementById('colorSquare')!;
    square.style.backgroundColor = color;
}