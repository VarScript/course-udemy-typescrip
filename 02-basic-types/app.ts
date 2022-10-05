(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes: [string, string] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones

    enum force {
      Acuaman = 0,
      Batman = 1,
      Flash = 5,
      Superman = 100,
    }
    const fuerzaSuperman:force = force.Superman;
    const fuerzaBatman:force = force.Batman;
    const fuerzaFlash:force = force.Flash;
    const fuerzaAcuaman:force = force.Acuaman;
    
    // Retorno de funciones
    const activar_batiseñal = ():string => {
      return 'activada';
    }
  
    const pedir_ayuda = ():void => {
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  })()
  
  