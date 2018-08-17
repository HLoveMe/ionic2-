1:去掉内容的滚动条
	{
		@Directive({
  			selector:"[base-content-no-scroll]"
		})
		export class BaseContentNoScroll{
  			constructor(
    		private ele:ElementRef,
  			){}
  			ngOnInit(){
    			let scroll_ele = this.ele.nativeElement.querySelector(".scroll-content");
    			scroll_ele.style.overflowY = "hidden";
  			}
		}

		<ion-content class="main" base-content-no-scroll>
		</ion-content>
	}