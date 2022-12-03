import { Controller, Get, Post, Body } from '@nestjs/common';
import { JanrService } from './janr.service';

@Controller('janr')
export class JanrController {

    constructor(private janrService: JanrService){
    }
    
    @Get()
    getFakeData(){
        return this.janrService.getAllJanr();
    }

    @Post()
    createNewJanr( @Body() 
    janr: {
        janrName: string;
        janrDesc: string;
    }){
        try{
            return this.janrService.createJanr(janr); 
        }catch(err){
            console.log("asdas", err.message);
        }
           
    }
}
