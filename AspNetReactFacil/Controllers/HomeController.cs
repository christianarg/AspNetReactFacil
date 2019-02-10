using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspNetReactFacil.Controllers
{
 
    
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ReactTutorial()
        {
            return View();
        }

        public ActionResult SomeData()
        {
            return Json(new List<SomeData>
            {
                new SomeData {Text="SomeData1" },
                new SomeData { Text = "SomeData2" }
            }, JsonRequestBehavior.AllowGet);
        }
    }

    public class SomeData
    {
        public string Text { get; set; }
    }
}