<template>
	<div>
		<div id="admin_body" class="admin_body">
		    <div id="admin_header" class="admin_header">
		        <div class="brand">
		        <div class="heart"><i class="fa fa-heart-o fa-lg"></i></div>
		        <span style="font-size:20px;margin-left:10px;">互联网金融大赛端后台管理系统</span>
		    </div>
		    <div class="client" id="client">
		        <img :src="'../source/images/avatar.jpg'" class="personimg">
		        <div id="admin_name" class="name">管理员</div>
		        <div class="xiala"><i class="fa fa-sort-desc" style="color:white"></i></div>
		    </div>
		    <div id="admin_ui_dropdown_menu" class="admin_ui_dropdown_menu" data-hideWhenBlur>
		        <a href="#/adminAccount.html">
		            <i class="fa fa-cogs"></i>&nbsp;账号管理
		        </a>
		        <a id="logoutButton">
		            <i class="fa fa-sign-out"></i>&nbsp;退出登录
		        </a>
		    </div>
		</div>
		<div id="admin_left" class="admin_left">
		    <div class="leftmenu">
		        <div>
		            <a href="#/objective.html" class="line">
		                <span class="icon markIcon">
		                    <i class="fa fa-file-text-o fa-lg"></i>
		                </span>
		                <div class="name">客观题</div>
		            </a>
		        </div>
		        <div>
		            <a class="line" href="#/raise.html">
		                <span class="icon markIcon">
		                    <i class="fa fa-calendar-plus-o fa-lg"></i>
		                </span>
		                <div class="name">项目发标</div>
		            </a>
		        </div>
		        <div>
		            <a class="line" href="#/invest.html">
		                <span class="icon markIcon">
		                    <i class="fa fa-calendar-times-o fa-lg"></i>
		                </span>
		                <div class="name">审标操作</div>
		            </a>
		        </div> 
		        <div>
		            <a class="line" href="#/bid.html">
		                <span class="icon markIcon">
		                    <i class="fa fa-calendar-check-o fa-lg"></i>
		                </span>
		                <div class="name">投标操作</div>
		            </a>
		        </div> 
		        <div>
		            <a class="line" href="#/case.html">
		                <span class="icon markIcon">
		                    <i class="fa fa-commenting fa-lg"></i>
		                </span>
		                <div class="name">案例分析</div>
		            </a>
		        </div> 
		        <div>
		            <a class="line" href="#/charity.html">
		                <span class="icon markIcon">
		                    <i class="fa fa-sliders fa-lg"></i>
		                </span>
		                <div class="name">公益设计</div>
		            </a>
		        </div>
		        <div>
		            <a class="line" href="#/item.html">
		                <span class="icon markIcon">
		                    <i class="fa fa-sort-amount-desc fa-lg"></i>
		                </span>
		                <div class="name">项目设计</div>
		            </a>
		        </div>
		        <div>
		            <a class="line" href="#/newWorld.html">
		                <span class="icon markIcon">
		                    <i class="fa fa-paper-plane-o fa-lg"></i>
		                </span>
		                <div class="name">创业新天地</div>
		            </a>
		        </div>  
		        <div>
		            <a class="line" href="#/user.html">
		                <span class="icon markIcon">
		                    <i class="fa fa-users fa-lg"></i>
		                </span>
		                <div class="name">选手信息</div>
		            </a>
		        </div>         
		    </div>
		</div>
		<div id="admin_content" class="admin_content">
			<router-view></router-view>
		</div>
	</div>
</template>