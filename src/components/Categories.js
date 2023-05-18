import React from "react";

const Categories = ({ setActiveCategory, categories, activeCategory }) => {
    return (
        <div className="agileits-navi_search">
            <form>
                <select id="agileinfo-nav_search" name="agileinfo_search" className="border" required="">
                    <option value="">All Categories</option>
                    <option value="Televisions">Televisions</option>
                    <option value="Headphones">Headphones</option>
                    <option value="Computers">Computers</option>
                    <option value="Appliances">Appliances</option>
                    <option value="Mobiles">Mobiles</option>
                    <option value="Fruits &amp; Vegetables">Tv &amp; Video</option>
                    <option value="iPad & Tablets">iPad & Tablets</option>
                    <option value="Cameras & Camcorders">Cameras & Camcorders</option>
                    <option value="Home Audio & Theater">Home Audio & Theater</option>
                </select>
            </form>
        </div>
    )
}

export default Categories;