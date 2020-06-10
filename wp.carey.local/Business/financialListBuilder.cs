using Sitecore.Mvc.Presentation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using wp.carey.local.Models;

namespace wp.carey.local.Business
{
    public class financialListBuilder
    {
        
        public financialList GetList()
        {
            var item = RenderingContext.Current.Rendering.Item;
            return new financialList()
            {
                fList = item.Children.ToArray()
                
            };

        }
        
    }


}
