using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using wp.carey.local.Business;

namespace wp.carey.local.Controllers
{
    public class financialController : Controller
    {
        // GET: financial
        private readonly financialListBuilder _provider;
        public financialController() : this(new financialListBuilder()) { }
        public financialController(financialListBuilder provider)
        {
            _provider = provider;
        }
        public ActionResult Index()
        {
            return View(_provider.GetList());
        }
        
    }
}