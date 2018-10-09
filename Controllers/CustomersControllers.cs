using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace single_page_sivut.Models
{
    [Route("api/[controller]")]
    public class CustomersController : Controller
    {
       
       public List<Customers> GetCustomers()
       {
           NorthwindContext context = new NorthwindContext();

           List<Customers> customers = (from c in context.Customers
                                        where c.Country == "Finland"
                                        select c).ToList();

            return customers;
       }


    }
}
