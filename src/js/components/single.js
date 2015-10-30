<div class="horchata">
    <div class="horchata__img" style="background-image:url('<%= image %>')">
    </div>
    <div class="horchata__body">
        <h3><%= name %></h3>
        <span class="grade">
            <% for(var i = 0; i < grade; i++){ %>
                <i class="fa fa-star"></i>
                <% } %>
            </span>
            <div class="description">
                <p><%= small_text %></p>
            </div>
            <div class="address">
                <a href="<%= map_url %>">
                    <%= address %>
                </a>
            </div>
        </div>
    </div>
