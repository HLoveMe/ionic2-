* SideMenu导航
	
	```
侧栏导航
	<ion-nav [root]="rootPage" #RootConetent></ion-nav>
	<ion-menu [content]="RootConetent" type="overlay">
	    <ion-header>
	        <ion-toolbar>
	            <ion-title></ion-title>
	        </ion-toolbar>
	    </ion-header>
	    <ion-content>
	        <ion-list>
	            <button menuClose *ngFor="let item of sideMenus" ion-item (click)="openPage(item)">
	            {{item.title}}
	            </button>
	        </ion-list>
	    </ion-content>
	</ion-menu>
	
	开关
		<ion-header>
		    <ion-navbar>
		        <button ion-button menuToggle>
		          Menu
		        </button>
		        <ion-title>
		            Ionic Blank
		        </ion-title>
		    </ion-navbar>
		</ion-header>
	
	指令
		menuClose 关
		menuOpen 开
		menuToggle 开关
		
	Api
		MenuController
	
	```