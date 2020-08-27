import { Pipe, PipeTransform } from '@angular/core';
import { StudentMstr } from './Models/StudentMstr';
import { TeacherMstr } from './Models/teacherMstr';

@Pipe({
  name: 'studentfilter',
  pure: false
})
export class StudentMstrPipe implements PipeTransform {

  transform(items: StudentMstr[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    // debugger;
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.Name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
                                || item.RegistrationNo.toLowerCase().indexOf(filter.toLowerCase()) !== -1
                                || item.Class.toLowerCase().indexOf(filter.toLowerCase()) !== -1
                                || item.Section.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }

}


@Pipe({
  name: 'teacherfilter',
  pure: false
})
export class TeacherMstrPipe implements PipeTransform {

  transform(items: TeacherMstr[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    // debugger;
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.Name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }

}
